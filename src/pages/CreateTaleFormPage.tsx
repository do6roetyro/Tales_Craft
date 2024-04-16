import React, { useState } from "react";

// Определение типов для состояния формы
interface FormData {
  theme: string;
  heroes: string;
  environment: string;
  plot: string;
  age: string;
  additional: string;
  illustrations: boolean;
}

// Предопределенные данные для списков
const themes = [
  "Приключение в заброшенном замке",
  "Спасение королевства от дракона",
  "Поиск сокровищ в таинственном лесу",
  "Магическое путешествие через разные миры",
  "Путешествие на необитаемый остров",
  "Приключение в океане",
  "Два друга спасают своих друзей из беды",
  "Путешествие на море",
];
const heroes = ["Рыцарь", "Волшебник", "Эльф", "Дракон"];
const environments = ["Лес", "Замок", "Пустыня", "Океан"];

const CreateTaleFormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    theme: "",
    heroes: "",
    environment: "",
    plot: "",
    age: "",
    additional: "",
    illustrations: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement; // Type assertion here
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Здесь будет логика отправки данных формы
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>
          Основная тема:
          <input
            list="themes"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="Выберите или напишите свою"
            className="input"
          />
          <datalist id="themes">
            {themes.map((theme, index) => (
              <option key={index} value={theme} />
            ))}
          </datalist>
        </label>
      </div>

      <div>
        <label>
          Герои сказки:
          <input
            list="heroes"
            name="heroes"
            value={formData.heroes}
            onChange={handleChange}
            placeholder="Выберите или напишите своих"
            className="input"
          />
          <datalist id="heroes">
            {heroes.map((hero, index) => (
              <option key={index} value={hero} />
            ))}
          </datalist>
        </label>
      </div>

      <div>
        <label>
          Окружение:
          <input
            list="environments"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            placeholder="Выберите или напишите свое"
            className="input"
          />
          <datalist id="environments">
            {environments.map((environment, index) => (
              <option key={index} value={environment} />
            ))}
          </datalist>
        </label>
      </div>
      <div>
        <label>
          Возраст ребенка:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Введите возраст"
            className="input"
          />
        </label>
      </div>

      <div>
        <label>
          Дополнительно:
          <textarea
            name="additional"
            value={formData.additional}
            onChange={handleChange}
            placeholder="Любая дополнительная информация"
            className="textarea"
          />
        </label>
      </div>

      <div>
        <label>
          Добавить иллюстрации:
          <input
            type="checkbox"
            name="illustrations"
            checked={formData.illustrations}
            onChange={handleChange}
            className="checkbox"
          />
        </label>
      </div>

      <button type="submit" className="button">
        Создать сказку
      </button>
    </form>
  );
};

export default CreateTaleFormPage;
