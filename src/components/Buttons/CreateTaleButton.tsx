import React from "react";
import Button from "@mui/material/Button";

interface CreateTaleButtonProps {
  isLoading: boolean;
}

const CreateTaleButton: React.FC<CreateTaleButtonProps> = ({ isLoading }) => {
  return (
    <div className="create-tale__buttons-container">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="create-tale__button button"
        disabled={isLoading}
      >
        Создать сказку
      </Button>
    </div>
  );
};

export default CreateTaleButton;
