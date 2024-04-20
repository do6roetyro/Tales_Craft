import React from "react";
import CreateTaleForm from "../components/Forms/CreateTaleForm/CreateTaleForm";

const CreateTaleFormPage: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Форма отправлена", formData);
    // Логика отправки данных на сервер
  };

  return (
    <section className="create-tale">
      <div className="create-tale__wrapper">
        <h2 className="visually-hidden">Cоздание сказки.</h2>
        <p className="create-tale__title title">
          Сделайте первый шаг навстречу сказочному путешествию:
        </p>
        <CreateTaleForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
};

export default CreateTaleFormPage;
