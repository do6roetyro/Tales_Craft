import React, { useState } from "react";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationPage: React.FC = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (formData: FormData) => {
    const { confirmPassword, ...dataToSend } = formData;
    setError("");

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
      navigate("/");
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };
  return (
    <section className="registration">
      <div className="registration__wrapper  wrapper">
        <h2 className="registration__title title">Регистрация пользователя</h2>
        {error && <p className="error">{error}</p>}
        <RegistrationForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
};

export default RegistrationPage;
