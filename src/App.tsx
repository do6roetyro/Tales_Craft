import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateTaleFormPage from "./pages/CreateTaleFormPage";
import TaleDisplayPage from "./pages/TaleDisplayPage";
import Footer from "./components/Footer/Footer";
import "./assets/styles/index.scss";

import { NavLink } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header
        loginLinkText="Войти"
        registrationLinkText="Регистрация"
        aboutLinkText="О нас"
        homeLinkText="Главная"
        createTaleLinkText="Создать сказку"
      />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/create" element={<CreateTaleFormPage />} />
          <Route path="/tale" element={<TaleDisplayPage />} />
        </Routes>
        <NavLink to="/tale" className='test'></NavLink>
      </main>
      <Footer
        aboutLinkText="О Приложении"
        supportLinkText="Поддержать разработчика"
        copyrightText="© Tales Craft"
      />
    </React.Fragment>
  );
}

export default App;
