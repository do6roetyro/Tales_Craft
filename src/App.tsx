import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header loginButtonText="Войти" registrationButtonText="Регистрация" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
