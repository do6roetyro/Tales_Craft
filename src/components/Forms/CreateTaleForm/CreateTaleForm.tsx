import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

interface FormData {
  theme: string;
  heroes: string;
  environment: string;
  age: string;
  additional: string;
  illustrations: boolean;
}

interface CreateTaleFormProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CreateTaleForm: React.FC<CreateTaleFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
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
