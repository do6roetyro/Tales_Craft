import React from "react";
import TaleDisplayOptionButtons from "./TaleDisplayOptionButtons";
import ButtonToMainPage from "../ButtonToMainPage";

interface TaleDisplayProps {
  title: string;
  text: string;
  image?: string;
}

const TaleDisplay: React.FC<TaleDisplayProps> = ({ title, text, image }) => {
  return (
    <section className="tale-display">
      <div className="tale-display__wrapper wrapper">
        <h2 className="tale-display__title title">{title}</h2>
        <div className="tale-display__container">
          <p className="tale-display__main-text tale-display__main-text--first description">
            {text}
          </p>
          {image && (
            <img
              src={image}
              alt="иллюстрация №1 к сказке"
              className="tale-display__image tale-display__image--first"
              width={1024}
              height={1024}
            />
          )}
        </div>
        <TaleDisplayOptionButtons />
        <ButtonToMainPage />
      </div>
    </section>
  );
};

export default TaleDisplay;
