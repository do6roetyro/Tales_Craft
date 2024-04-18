import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "../../../utils/registrationValidate";
import Button from "@mui/material/Button";

interface RegistrationFormProps {
  onSubmit: (formData: any) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

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

    const noErrors = Object.values(errors).every((e) => e === "");
    if (noErrors) {
      onSubmit(formData);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 items-center"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <label className="w-full">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Имя пользователя"
            className="w-full p-2 border rounded text-black"
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {formErrors.username && (
          <div className="text-red-500 text-sm">{formErrors.username}</div>
        )}
        <label className="w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-black"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {formErrors.email && (
          <div className="text-red-500 text-sm">{formErrors.email}</div>
        )}
        <label className="w-full">
          <input
            type="password"
            id="new-password"
            name="password"
            placeholder="Пароль"
            className="w-full p-2 border rounded text-black"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {formErrors.password && (
          <div className="text-red-500 text-sm">{formErrors.password}</div>
        )}
        <label className="w-full">
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Подтверждение пароля"
            className="w-full p-2 border rounded text-black"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {formErrors.confirmPassword && (
          <div className="text-red-500 text-sm">
            {formErrors.confirmPassword}
          </div>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full max-w-52 mx-auto mt-4"
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
