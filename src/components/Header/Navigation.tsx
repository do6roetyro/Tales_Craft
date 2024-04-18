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
      <Link to="/" className="text-lg hover:text-gray-300 main-nav__link link">
        {homeButtonText}
      </Link>
      <button
        onClick={onLoginClick}
        className="text-lg hover:text-gray-300 main-nav__link main-nav__link--button button"
      >
        {loginButtonText}
      </button>
      <Link
        to="/registration"
        className="text-lg hover:text-gray-300 main-nav__link link"
      >
        {registrationButtonText}
      </Link>
      <Link
        to="/create"
        className="text-lg hover:text-gray-300 main-nav__link link"
      >
        {createTaleButtonText}
      </Link>
      <Link
        to="/about"
        className="text-lg hover:text-gray-300 main-nav__link link"
      >
        {aboutButtonText}
      </Link>
    </nav>
  );
};

export default Navigation;
