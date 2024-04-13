import React from "react";
import logo from "../../assets/images/tale_craft_logo.svg";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center w-16 h-16">
      <img
        src={logo}
        alt="Tales Craft"
        className="object-cover w-24 h-24 transition duration-300 ease-in-out transform hover:scale-110 focus:scale-110"
        width={128}
        height={128}
      />
    </Link>
  );
};

export default Logo;
