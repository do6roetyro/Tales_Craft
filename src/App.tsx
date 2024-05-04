import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateTaleFormPage from "./pages/CreateTaleFormPage";
import TaleDisplayPage from "./pages/TaleDisplayPage";
import LibraryPage from "./pages/LibraryPage";
import Footer from "./components/Footer/Footer";
import "./assets/styles/index.scss";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Header
        loginLinkText="Войти"
        registrationLinkText="Регистрация"
        aboutLinkText="О нас"
        homeLinkText="Главная"
        createTaleLinkText="Создать сказку"
        libraryLinkText="Библиотека"
      />
      <main className="main-container">
        <h1 className="visually-hidden">Tales Craft - мастерская по созданию сказок</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/create" element={<CreateTaleFormPage />} />
          <Route path="/tale" element={<TaleDisplayPage />} />
          <Route path="/lib" element={<LibraryPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer
        aboutLinkText="О Нас"
        supportLinkText="Поддержать разработчика"
        copyrightText="© Tales Craft"
      />
    </React.Fragment>
  );
}

export default App;
