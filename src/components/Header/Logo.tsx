import React from "react";
import logo from "../../assets/images/tale_craft_logo.svg";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="main-header__logo-link">
      <img
        src={logo}
        alt="Tales Craft"
        className="main-header__logo-image"
        width={128}
        height={128}
      />
    </Link>
  );
};

export default Logo;
