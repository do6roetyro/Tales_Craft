import React from "react";
//TODO Уточнить какой action

const LoginForm: React.FC = () => {
  return (
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
  );
};

export default LoginForm;
