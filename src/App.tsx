import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateTaleFormPage from "./pages/CreateTaleFormPage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
   
        <Header
          loginButtonText="Войти"
          registrationButtonText="Регистрация"
          aboutButtonText="О нас"
          homeButtonText="Главная"
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/create" element={<CreateTaleFormPage />} />
        </Routes>
    
    </React.Fragment>
  );
}

export default App;
