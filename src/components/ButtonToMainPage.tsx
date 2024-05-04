import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const ButtonToMainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="tale-display__route-buttons">
      <Button
        type="button"
        variant="contained"
        color="primary"
        className="tale-display__button tale-display__button--close button"
        onClick={handleNavigate}
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default ButtonToMainPage;
