import React, { useState } from "react";
import Logo from "./Logo";
import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

interface HeaderProps {
  loginButtonText: string;
  registrationButtonText: string;
  aboutButtonText: string;
  homeButtonText: string;
}

const Header: React.FC<HeaderProps> = ({
  loginButtonText,
  registrationButtonText,
  aboutButtonText,
  homeButtonText,
}) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white">
      <Logo />
      <IconButton
        edge="start"
        color="inherit"
        aria-label="меню"
        onClick={toggleDrawer(true)}
        className=" hide-on-md"
      >
        {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <nav className="hidden md:flex items-center gap-8">
    <Link to="/" className="text-lg hover:text-gray-300">
      {homeButtonText}
    </Link>
    <button onClick={openLoginModal} className="text-lg hover:text-gray-300">
      {loginButtonText}
    </button>
    <Link to="/registration" className="text-lg hover:text-gray-300">
      {registrationButtonText}
    </Link>
    <Link to="/about" className="text-lg hover:text-gray-300">
      {aboutButtonText}
    </Link>
  </nav>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <nav className="flex flex-col items-start  p-4">
            <Link
              to="/"
              className="mt-4 text-lg text-black hover:text-gray-400"
            >
              {homeButtonText}
            </Link>
            <button
              onClick={openLoginModal}
              className="mt-4 text-lg text-black hover:text-gray-400"
            >
              {loginButtonText}
            </button>
            <Link
              to="/registration"
              className="mt-4 text-lg text-black hover:text-gray-400"
            >
              {registrationButtonText}
            </Link>
            <Link
              to="/about"
              className="mt-4 text-lg text-black hover:text-gray-400"
            >
              {aboutButtonText}
            </Link>
          </nav>
        </div>
      </Drawer>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm />
      </Modal>
    </header>
  );
};

export default Header;
