import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./assets/styles/index.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateTaleFormPage from "./pages/CreateTaleFormPage";
import TaleDisplayPage from "./pages/TaleDisplayPage";
import LibraryPage from "./pages/LibraryPage";
import LoginPage from "./pages/LoginPage";
import InstructionPage from "./pages/InstructionPage";
import ContactsPage from "./pages/ContactsPage";
import Tale1 from "./components/Tales/Tale1";
import Tale2 from "./components/Tales/Tale2";
import Tale3 from "./components/Tales/Tale3";

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
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/tale1" element={<Tale1 />} />
          <Route path="/tale2" element={<Tale2 />} />
          <Route path="/tale3" element={<Tale3 />} />
        </Routes>
      </main>
      <Footer
        aboutLinkText="О Приложении"
        supportLinkText="Связаться с разработчиком"
        copyrightText="© Tales Craft"
      />
    </React.Fragment>
  );
}

export default App;
