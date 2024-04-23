import React from "react";
import Button from "@mui/material/Button";

interface TaleDisplayProps {
  title: string;
  text: string;
  image_1?: string;
  image_2?: string;
}

const TaleDisplay: React.FC<TaleDisplayProps> = ({
  title,
  text,
  image_1,
  image_2,
}) => {
  return (
    <section className="tale-display">
      <h2 className="tale-display__title title">{title}</h2>
      <div className="tale-display__container">
        {image_1 && (
          <img
            src={image_1}
            alt="иллюстрация №1 к сказке"
            className="tale-display__image tale-display__image--first"
          />
        )}
        <p className="tale-display__main-text description">{text}</p>
        {image_2 && (
          <img
            src={image_2}
            alt="иллюстрация №2 к сказке"
            className="tale-display__image tale-display__image--second"
          />
        )}
      </div>
      <div className="tale-display__options-button">
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="tale-display__button tale-display__button--save button"
        >
          Сохранить
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="tale-display__button tale-display__button--print button"
        >
          Распечатать
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="tale-display__button tale-display__button--share button"
        >
          Поделиться
        </Button>
      </div>

      <Button
        type="button"
        variant="contained"
        color="primary"
        className="tale-display__button tale-display__button--close button"
      >
        Закрыть
      </Button>
    </section>
  );
};

export default TaleDisplay;
