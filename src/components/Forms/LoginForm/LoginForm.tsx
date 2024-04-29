import React from "react";
import Button from "@mui/material/Button";

const LoginForm: React.FC = () => {
  return (
    <div className="modal__login login">
    <h2 className="login__title title">Введите данные пользователя:</h2>
    <form className="login__form">
      <input
        type="text"
        id="login"
        name="login"
        placeholder="Введите логин"
        className="login__input"
        autoComplete="off"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Введите пароль"
        className="login__input"
        autoComplete="off"
      />
      <Button
          type="submit"
          variant="contained"
          color="primary"
          className="login__button button"
        >
           Войти
        </Button>
    </form>
    </div>
  );
};

export default LoginForm;
