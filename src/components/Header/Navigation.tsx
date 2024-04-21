import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  homeLinkText: string;
  loginLinkText: string;
  registrationLinkText: string;
  aboutLinkText: string;
  createTaleLinkText: string;
  onLoginClick: () => void;
  vertical?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  homeLinkText,
  loginLinkText,
  registrationLinkText,
  aboutLinkText,
  createTaleLinkText,
  onLoginClick,
  vertical = false,
}) => {
  const navigationClass = vertical
    ? "main-nav--vertical"
    : "main-nav--horizontal";

  return (
    <nav className={navigationClass}>
      <Link to="/" className="main-nav__link link">
        {homeLinkText}
      </Link>
      <button
        onClick={onLoginClick}
        className="main-nav__link main-nav__link--button button"
      >
        {loginLinkText}
      </button>
      <Link
        to="/registration"
        className="main-nav__link link"
      >
        {registrationLinkText}
      </Link>
      <Link
        to="/create"
        className="main-nav__link link"
      >
        {createTaleLinkText}
      </Link>
      <Link
        to="/about"
        className="main-nav__link link"
      >
        {aboutLinkText}
      </Link>
    </nav>
  );
};

export default Navigation;
