import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  homeButtonText: string;
  loginButtonText: string;
  registrationButtonText: string;
  aboutButtonText: string;
  createTaleButtonText: string;
  onLoginClick: () => void;
  vertical?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  homeButtonText,
  loginButtonText,
  registrationButtonText,
  aboutButtonText,
  createTaleButtonText,
  onLoginClick,
  vertical = false,
}) => {
  const navigationClass = vertical
    ? "main-nav--vertical"
    : "main-nav--horizontal";

  return (
    <nav className={navigationClass}>
      <Link to="/" className="main-nav__link link">
        {homeButtonText}
      </Link>
      <button
        onClick={onLoginClick}
        className="main-nav__link main-nav__link--button button"
      >
        {loginButtonText}
      </button>
      <Link
        to="/registration"
        className="main-nav__link link"
      >
        {registrationButtonText}
      </Link>
      <Link
        to="/create"
        className="main-nav__link link"
      >
        {createTaleButtonText}
      </Link>
      <Link
        to="/about"
        className="main-nav__link link"
      >
        {aboutButtonText}
      </Link>
    </nav>
  );
};

export default Navigation;
