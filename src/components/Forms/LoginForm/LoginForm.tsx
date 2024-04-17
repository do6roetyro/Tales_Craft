import React from "react";
//TODO Уточнить какой action

const LoginForm: React.FC = () => {
  return (
    <React.Fragment>
    <h2 className="text-black pb-2 relative top-[-20px]">Введите данные пользователя:</h2>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        id="login"
        name="login"
        placeholder="Логин"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Пароль"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <button
        type="submit"
        className="p-2 border rounded bg-green-600 text-white"
      >
        Войти
      </button>
    </form>
    </React.Fragment>
  );
};

export default LoginForm;
