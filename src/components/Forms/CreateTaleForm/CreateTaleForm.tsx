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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 items-center"
    >
      <div className="w-full max-w-md">
        <label aria-label="Основная тема">
          <span className="block pb-2">Основная тема:</span>
          <input
            type="text"
            list="themes"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="Выберите или напишите свою"
            className="w-full p-2 border rounded text-black"
          />
          <datalist id="themes">
            {themes.map((theme, index) => (
              <option key={index} value={theme} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="w-full max-w-md">
        <label aria-label="Герои сказки">
          <span className="block pb-2">Герои сказки:</span>
          <input
            type="text"
            list="heroes"
            id="heroes"
            name="heroes"
            value={formData.heroes}
            onChange={handleChange}
            placeholder="Выберите или напишите своих"
            className="w-full p-2 border rounded text-black"
          />
          <datalist id="heroes">
            {heroes.map((hero, index) => (
              <option key={index} value={hero} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="w-full max-w-md">
        <label aria-label="Окружение">
          <span className="block pb-2">Окружение:</span>
          <input
            list="environments"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            placeholder="Выберите или напишите свое"
            className="w-full p-2 border rounded text-black"
          />
          <datalist id="environments">
            {environments.map((environment, index) => (
              <option key={index} value={environment} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="w-full max-w-md">
        <label aria-label="Возраст ребенка">
          <span className="block pb-2">Возраст ребенка:</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Введите возраст"
            className="w-full p-2 border rounded text-black"
          />
        </label>
      </div>
      <div className="w-full max-w-md">
        <label aria-label="Дополнительная информация">
          <span className="block pb-2">Дополнительно:</span>
          <textarea
            name="additional"
            value={formData.additional}
            onChange={handleChange}
            placeholder="Любая дополнительная информация"
            className="w-full p-2 border rounded text-black"
          />
        </label>
      </div>
      <div className="w-full max-w-md">
        <label aria-label="Добавить иллюстрации к сказке">
          {/* TODO Изменить цвет чекбокса */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.illustrations}
                onChange={handleChange}
                name="illustrations"
                color="primary"
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
        className="w-full max-w-52 mx-auto mt-4"
      >
        Создать сказку
      </Button>
    </form>
  );
};

export default CreateTaleForm;
