import React from "react";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Форма отправлена", formData);
    // Логика отправки данных на сервер
  };

  return (
    <section className="registration">
      <div className="registration__wrapper  wrapper">
      <h2 className="registration__title title">Регистрация пользователя</h2>
      <RegistrationForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
};

export default RegistrationPage;
