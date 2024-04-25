import React from "react";
import Button from "@mui/material/Button";
import printLogo from "../assets/images/print.svg";
import saveLogo from "../assets/images/save.svg";
import shareLogo from "../assets/images/share.svg";

interface TaleDisplayProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  image_1?: string;
  image_2?: string;
}

const TaleDisplay: React.FC<TaleDisplayProps> = ({
  title,
  text1,
  text2,
  text3,
  image_1,
  image_2,
}) => {
  return (
    <section className="tale-display">
      <div className="tale-display__wrapper wrapper">
        <h2 className="tale-display__title title">{title}</h2>
        <div className="tale-display__container">
          <p className="tale-display__main-text tale-display__main-text--first description">
            {text1}
          </p>
          {image_1 && (
            <img
              src={image_1}
              alt="иллюстрация №1 к сказке"
              className="tale-display__image tale-display__image--first"
              width={250}
              height={250}
            />
          )}
          <p className="tale-display__main-text tale-display__main-text--second description">
            {text2}
          </p>
          {image_2 && (
            <img
              src={image_2}
              alt="иллюстрация №2 к сказке"
              className="tale-display__image tale-display__image--second"
              width={250}
              height={250}
            />
          )}
          <p className="tale-display__main-text tale-display__main-text--third description">
            {text3}
          </p>
        </div>

        <div className="tale-display__option-buttons">
          <button
            type="button"
            className="tale-display__button tale-display__button--save button"
          >
            <img src={saveLogo} alt="Сохранить" width={32} height={32} />
            <span className="visually-hidden">Сохранить</span>
          </button>
          <button
            type="button"
            className="tale-display__button tale-display__button--print button"
          >
            <img src={printLogo} alt="Печать" width={32} height={32} />
            <span className="visually-hidden"> Распечатать</span>
          </button>
          <button
            type="button"
            className="tale-display__button tale-display__button--share button"
          >
            <img src={shareLogo} alt="Поделиться" width={32} height={32} />
            <span className="visually-hidden">Поделиться</span>
          </button>
        </div>
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
      </div>
    </section>
  );
};

export default TaleDisplay;
