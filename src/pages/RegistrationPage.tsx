import React from "react";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Форма отправлена", formData);
    // Логика отправки данных на сервер
  };

  return (
    <div>
      <h2>Регистрация пользователя</h2>
      <RegistrationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegistrationPage;
