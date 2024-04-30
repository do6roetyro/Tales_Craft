import React from "react";
import Button from "@mui/material/Button";

const ButtonToMainPage: React.FC = () => {
  return (
    <div className="tale-display__route-buttons">
      <Button
        type="button"
        variant="contained"
        color="primary"
        className="tale-display__button tale-display__button--close button"
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default ButtonToMainPage;
