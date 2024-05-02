import React from "react";
import Button from "@mui/material/Button";
//TODO Уточнить какой action

const LoginForm: React.FC = () => {
  return (
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
  );
};

export default LoginForm;
