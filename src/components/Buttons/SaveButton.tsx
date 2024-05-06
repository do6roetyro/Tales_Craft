import React from "react";
import Button from "@mui/material/Button";
import savePdf from "../../utils/savePdf";

interface SaveButtonProps {
  title: string;
  text: string;
  image?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ title, text, image }) => {
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      className="tale-display__button tale-display__button--save button"
      onClick={() => savePdf(title, text, image, "save")}
    >
      Сохранить
    </Button>
  );
};

export default SaveButton;
