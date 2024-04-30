import React from "react";
// import Button from "@mui/material/Button";
import OptionButtons from "./OptionButtons";
import BackToTheMainButton from "./BackToTheMainPageButton";

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
        <OptionButtons />
        <BackToTheMainButton />
      </div>
    </section>
  );
};

export default TaleDisplay;
