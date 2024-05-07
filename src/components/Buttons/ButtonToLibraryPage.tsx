import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const ButtonToLibraryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/lib");
  };

  return (
    <div className="tale-display__route-buttons">
      <Button
        type="button"
        variant="contained"
        color="primary"
        className="tale-display__button tale-display__button--main button"
        onClick={handleNavigate}
      >
        Вернуться в библиотеку
      </Button>
    </div>
  );
};

export default ButtonToLibraryPage;
