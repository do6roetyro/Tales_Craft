import React from "react";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Форма отправлена", formData);
    // Логика отправки данных на сервер
  };

  return (
    <section>
      <h2 className="p-4 pt-8 text-center">Регистрация пользователя</h2>
      <RegistrationForm onSubmit={handleFormSubmit} />
    </section>
  );
};

export default RegistrationPage;
