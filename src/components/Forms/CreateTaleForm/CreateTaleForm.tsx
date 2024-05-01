import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import {
  validateAge,
  validateTextLength,
} from "../../../utils/createTaleValidate";
import { fetchTaleFromOpenAI } from "../../../services/openaiServiceText";
import { fetchImagesFromOpenAI } from "../../../services/openaiServiceImages";

interface FormData {
  theme: string;
  heroes: string;
  environment: string;
  age: string;
  additional: string;
  illustrations: boolean;
}

interface CreateTaleFormProps {
  onSubmit: (formData: FormData) => void;
}

const CreateTaleForm: React.FC<CreateTaleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    theme: "",
    heroes: "",
    environment: "",
    age: "",
    additional: "",
    illustrations: false,
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    theme: "",
    heroes: "",
    environment: "",
    age: "",
    additional: "",
    illustrations: false,
  });

  const [imageURLs, setImageURLs] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (event.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("я отправилась");
    const errors = {
      theme: validateTextLength(formData.theme),
      heroes: validateTextLength(formData.heroes),
      environment: validateTextLength(formData.environment),
      age: validateAge(formData.age),
      additional: validateTextLength(formData.additional),
      illustrations: formData.illustrations,
    };

    setFormErrors(errors);

    const noErrors = Object.values(errors)
      .filter((error) => typeof error === "string")
      .every((error) => error === "");
    if (noErrors) {
      console.log("всё ок - ошибок нет");
      try {
        const taleText = await fetchTaleFromOpenAI(formData);
        console.log("Сгенерированная сказка:", taleText);

        if (formData.illustrations) {
          console.log('я выбрал генерацию с изображениями')
          try {
            const imagesURLs = await fetchImagesFromOpenAI(formData);
            setImageURLs(imageURLs);
            console.log("Generated images:", imagesURLs);
            // Здесь можно обработать URL изображений, например, показать их пользователю или интегрировать в PDF
          } catch (imageError) {
            console.error("Error fetching images:", imageError);
          }
        }
        // Здесь можете вызвать функцию для генерации PDF с taleText
        onSubmit(formData); // Если нужно передать данные выше или дополнительно обработать
      } catch (error) {
        console.error("Ошибка при получении сказки:", error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="create-tale__form">
      <div className="create-tale__container">
        <label className="create-tale__label" aria-label="Основная тема">
          <span className="create-tale__description">Основная тема:</span>
          <textarea
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="Например, спасение королевства от дракона или путешествие на море."
            rows={3}
            className="create-tale__input"
          />
        </label>
        {formErrors.theme && (
          <div className="create-tale__error">{formErrors.theme}</div>
        )}
      </div>
      <div className="create-tale__container">
        <label aria-label="Герои сказки">
          <span className="create-tale__description">Герои сказки:</span>
          <textarea
            id="heroes"
            name="heroes"
            value={formData.heroes}
            onChange={handleChange}
            placeholder="Например, волшебники или машинки или лесные звери."
            rows={3}
            className="create-tale__input"
          />
        </label>
        {formErrors.heroes && (
          <div className="create-tale__error">{formErrors.heroes}</div>
        )}
      </div>
      <div className="create-tale__container">
        <label aria-label="Окружение">
          <span className="create-tale__description">Окружение:</span>
          <textarea
            id="environment"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            placeholder="Например, дремучий лес или бабушкина дача или бескрайняя пустыня."
            rows={3}
            className="create-tale__input"
          />
        </label>
        {formErrors.environment && (
          <div className="create-tale__error">{formErrors.environment}</div>
        )}
      </div>
      <div className="create-tale__container">
        <label aria-label="Возраст ребенка">
          <span className="create-tale__description">Возраст ребенка:</span>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Введите возраст от 0 до 17 лет"
            className="create-tale__input"
          />
        </label>
        {formErrors.age && (
          <div className="create-tale__error">{formErrors.age}</div>
        )}
      </div>
      <div className="create-tale__container">
        <label aria-label="Дополнительная информация">
          <span className="create-tale__description">Дополнительно:</span>
          <textarea
            name="additional"
            id="additional"
            value={formData.additional}
            onChange={handleChange}
            placeholder="Любая дополнительная информация"
            rows={3}
            className="create-tale__input"
          />
        </label>
        {formErrors.additional && (
          <div className="create-tale__error">{formErrors.additional}</div>
        )}
      </div>
      <div className="create-tale__container">
        <label aria-label="Добавить иллюстрации к сказке">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.illustrations}
                onChange={handleChange}
                name="illustrations"
                id="illustrations"
                color="primary"
                className="create-tale__checkbox"
              />
            }
            label="Добавить иллюстрации к сказке"
          />
        </label>
      </div>
      <div>
        {imageURLs.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="Generated illustration"
            style={{ width: "100%", marginBottom: "10px" }}
          />
        ))}
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="create-tale__button button"
      >
        Создать сказку
      </Button>
    </form>
  );
};

export default CreateTaleForm;
