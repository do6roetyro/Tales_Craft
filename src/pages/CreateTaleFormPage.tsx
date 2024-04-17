// ТODO СДЕЛАТЬ СТИЛИ. ВАЛИДАЦИЮ.
import React, { useState } from "react";
import CreateTaleForm from "../components/Forms/CreateTaleForm/CreateTaleForm";
import { themes, heroes, environments } from "../components/Forms/CreateTaleForm/datalistsForCreateTaleForm";

const CreateTaleFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    theme: "",
    heroes: "",
    environment: "",
    age: "",
    additional: "",
    illustrations: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
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
   <div>
    <h2 className="hidden">Cоздание сказки.</h2>
    <p className="p-4 text-center">Сделайте первый шаг навстречу сказочному путешествию:</p>
    <CreateTaleForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        themes={themes}
        heroes={heroes}
        environments={environments}
    />
   </div>
  );
};

export default CreateTaleFormPage;
