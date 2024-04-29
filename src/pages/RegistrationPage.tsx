import React from "react";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationPage: React.FC = () => {
  const handleFormSubmit = async (formData: FormData) => {
    // Удаляем confirmPassword перед отправкой на сервер, так как он не нужен для регистрации
    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Ошибка: ${response.status} - ${errorBody}`);
      }

      const result = await response.json();
      console.log("Результат регистрации:", result);
      // Здесь можно, например, перенаправить пользователя на страницу входа
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
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
