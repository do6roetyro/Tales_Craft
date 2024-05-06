import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const ButtonToMainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      className="tale-display__button tale-display__button--close button"
      onClick={handleNavigate}
    >
      Вернуться на главную
    </Button>
  );
};

export default ButtonToMainPage;
