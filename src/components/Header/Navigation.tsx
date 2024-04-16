import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  homeButtonText: string;
  loginButtonText: string;
  registrationButtonText: string;
  aboutButtonText: string;
  onLoginClick: () => void;
  vertical?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  homeButtonText,
  loginButtonText,
  registrationButtonText,
  aboutButtonText,
  onLoginClick,
  vertical = false,
}) => {
  const navigationClass = vertical
    ? "flex flex-col items-start p-4"
    : "hidden md:flex items-center gap-8";

  return (
    <nav className={navigationClass}>
      <Link to="/" className="text-lg hover:text-gray-300">
        {homeButtonText}
      </Link>
      <button onClick={onLoginClick} className="text-lg hover:text-gray-300">
        {loginButtonText}
      </button>
      <Link to="/registration" className="text-lg hover:text-gray-300">
        {registrationButtonText}
      </Link>
      <Link to="/about" className="text-lg hover:text-gray-300">
        {aboutButtonText}
      </Link>
    </nav>
  );
};

export default Navigation;
