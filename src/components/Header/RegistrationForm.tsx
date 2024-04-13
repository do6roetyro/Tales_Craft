import React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Имя пользователя"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <input
        type="password"
        id="new-password"
        name="new-password"
        placeholder="Пароль"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        placeholder="Подтверждение пароля"
        className="p-2 border rounded text-black"
        autoComplete="off"
      />
      <button
        type="submit"
        className="p-2 border rounded bg-green-600 text-white"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;