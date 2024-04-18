import React, { useState } from "react";
import Logo from "./Logo";
import Modal from "../Modal/Modal";
import LoginForm from "../Forms/LoginForm/LoginForm";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Navigation from "./Navigation";

interface HeaderProps {
  loginButtonText: string;
  registrationButtonText: string;
  aboutButtonText: string;
  homeButtonText: string;
  createTaleButtonText: string;
}

const Header: React.FC<HeaderProps> = ({
  loginButtonText,
  registrationButtonText,
  aboutButtonText,
  homeButtonText,
  createTaleButtonText,
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
      {/* Это навигация для разрешения выше 768 px */}
      <Navigation
        homeButtonText={homeButtonText}
        loginButtonText={loginButtonText}
        registrationButtonText={registrationButtonText}
        aboutButtonText={aboutButtonText}
        createTaleButtonText={createTaleButtonText}
        onLoginClick={openLoginModal}
      />
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Это навигация для разрешения мобильных устройств ниже 768 px */}
          <Navigation
            homeButtonText={homeButtonText}
            loginButtonText={loginButtonText}
            registrationButtonText={registrationButtonText}
            aboutButtonText={aboutButtonText}
            createTaleButtonText={createTaleButtonText}
            onLoginClick={openLoginModal}
            vertical={true}
          />
        </div>
      </Drawer>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm />
      </Modal>
    </header>
  );
};

export default Header;
