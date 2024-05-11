import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./assets/styles/index.scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const CreateTaleFormPage = lazy(() => import("./pages/CreateTaleFormPage"));
const TaleDisplayPage = lazy(() => import("./pages/TaleDisplayPage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const InstructionPage = lazy(() => import("./pages/InstructionPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const Tale1 = lazy(() => import("./components/Tales/Tale1"));
const Tale2 = lazy(() => import("./components/Tales/Tale2"));
const Tale3 = lazy(() => import("./components/Tales/Tale3"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <div className="page__wrapper">
        <main className="main-container">
          <h1 className="visually-hidden">
            Tales Craft - мастерская по созданию сказок
          </h1>
          <div className="test">
            <Suspense fallback={<div className="suspense-load"></div>}>
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
            </Suspense>
          </div>
        </main>
      </div>
      <Footer
        aboutLinkText="О Приложении"
        supportLinkText="Связаться с разработчиком"
        copyrightText="© Tales Craft"
      />
    </React.Fragment>
  );
}

export default App;
