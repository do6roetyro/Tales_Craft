import React from "react";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <section className="login">
      <div className="login__wrapper wrapper">
        <h2 className="login__title title">Войти в свою сказку</h2>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
