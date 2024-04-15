import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "../utils/registrationValidate";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Изменяем обработчик handleSubmit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Используем импортированные функции для установления ошибок
    const errors = {
      username: validateUsername(formData.username),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      ),
    };

    setFormErrors(errors);

    // Если ошибок нет, отправляем форму
    const noErrors = Object.values(errors).every((e) => e === "");
    if (noErrors) {
      console.log("Форма отправлена", formData);
      // ... отправка данных на сервер ...
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Очистка ошибок при изменении
    setFormErrors({ ...formErrors, [name]: "" });
  };

  return (
    <form className="flex flex-col gap-4 p-4 pt-8" onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Имя пользователя"
        className="p-2 border rounded text-black"
        autoComplete="off"
        value={formData.username}
        onChange={handleChange}
      />
      {formErrors.username && (
        <div className="text-red-500 text-sm">{formErrors.username}</div>
      )}

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        className="p-2 border rounded text-black"
        autoComplete="off"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && (
        <div className="text-red-500 text-sm">{formErrors.email}</div>
      )}

      <input
        type="password"
        id="new-password"
        name="password"
        placeholder="Пароль"
        className="p-2 border rounded text-black"
        autoComplete="off"
        value={formData.password}
        onChange={handleChange}
      />
      {formErrors.password && (
        <div className="text-red-500 text-sm">{formErrors.password}</div>
      )}

      <input
        type="password"
        id="confirm-password"
        name="confirmPassword"
        placeholder="Подтверждение пароля"
        className="p-2 border rounded text-black"
        autoComplete="off"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {formErrors.confirmPassword && (
        <div className="text-red-500 text-sm">{formErrors.confirmPassword}</div>
      )}

      <button
        type="submit"
        className="p-2 border rounded bg-green-600 text-white"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationPage;
