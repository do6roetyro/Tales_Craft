import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "../../../utils/registrationValidate";
import Button from "@mui/material/Button";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationFormProps {
  onSubmit: (formData: FormData) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
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
    <form className="registration__form" onSubmit={handleSubmit}>
      <div className="registration__container">
        <label className="registration__label">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Имя пользователя"
            className="registration__input"
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {formErrors.username && (
          <div className="registration__error">{formErrors.username}</div>
        )}
        <label className="registration__label">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="registration__input"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {formErrors.email && (
          <div className="registration__error">{formErrors.email}</div>
        )}
        <label className="registration__label">
          <input
            type="password"
            id="new-password"
            name="password"
            placeholder="Пароль"
            className="registration__input"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {formErrors.password && (
          <div className="registration__error">{formErrors.password}</div>
        )}
        <label className="registration__label">
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Подтверждение пароля"
            className="registration__input"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {formErrors.confirmPassword && (
          <div className="registration__error">
            {formErrors.confirmPassword}
          </div>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="registration__button button"
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
