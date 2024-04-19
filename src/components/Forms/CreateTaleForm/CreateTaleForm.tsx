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
  themes: string[];
  heroes: string[];
  environments: string[];
}

const CreateTaleForm: React.FC<CreateTaleFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  themes,
  heroes,
  environments,
}) => {
  return (
    <form onSubmit={handleSubmit} className="create-tale__form">
      <div className="create-tale__container">
        <label className="create-tale__label" aria-label="Основная тема">
          <span className="create-tale__description">Основная тема:</span>
          <input
            type="text"
            list="themes"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="Выберите или напишите свою"
            className="create-tale__input"
          />
          <datalist id="themes">
            {themes.map((theme, index) => (
              <option key={index} value={theme} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="create-tale__container">
        <label aria-label="Герои сказки">
          <span className="create-tale__description">Герои сказки:</span>
          <input
            type="text"
            list="heroes"
            id="heroes"
            name="heroes"
            value={formData.heroes}
            onChange={handleChange}
            placeholder="Выберите или напишите своих"
            className="create-tale__input"
          />
          <datalist id="heroes">
            {heroes.map((hero, index) => (
              <option key={index} value={hero} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="create-tale__container">
        <label aria-label="Окружение">
          <span className="create-tale__description">Окружение:</span>
          <input
            list="environments"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            placeholder="Выберите или напишите свое"
            className="create-tale__input"
          />
          <datalist id="environments">
            {environments.map((environment, index) => (
              <option key={index} value={environment} />
            ))}
          </datalist>
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
            placeholder="Введите возраст"
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
            className="create-tale__input"
          />
        </label>
      </div>
      <div className="create-tale__container">
        <label aria-label="Добавить иллюстрации к сказке">
          {/* TODO Изменить цвет чекбокса */}
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
