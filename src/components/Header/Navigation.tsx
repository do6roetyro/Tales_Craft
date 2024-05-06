import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  homeLinkText: string;
  loginLinkText: string;
  registrationLinkText: string;
  aboutLinkText: string;
  createTaleLinkText: string;
  libraryLinkText: string;
  onLoginClick: () => void;
  vertical?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  homeLinkText,
  loginLinkText,
  registrationLinkText,
  aboutLinkText,
  createTaleLinkText,
  libraryLinkText,
  vertical = false,
}) => {
  const navigationClass = vertical
    ? "main-nav--vertical"
    : "main-nav--horizontal";

  const getNavLinkClass = (isActive: boolean) =>
    isActive
      ? "main-nav__link link main-nav__link--active"
      : "main-nav__link link";

  return (
    <nav className={navigationClass}>
      <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
        {homeLinkText}
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {loginLinkText}
      </NavLink>
      <NavLink
        to="/registration"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {registrationLinkText}
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {createTaleLinkText}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {aboutLinkText}
      </NavLink>
      <NavLink
        to="/lib"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {libraryLinkText}
      </NavLink>
    </nav>
  );
};

export default Navigation;
