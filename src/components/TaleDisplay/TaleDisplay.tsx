import React from "react";
import SaveButton from "../Buttons/SaveButton";
import splitTextIntoParagraphs from "../../utils/splitTextIntoParagraphs";
import ButtonToMainPage from "../Buttons/ButtonToMainPage";

interface TaleDisplayProps {
  title: string;
  text: string;
  image?: string;
}

const TaleDisplay: React.FC<TaleDisplayProps> = ({ title, text, image }) => {
  const paragraphs = splitTextIntoParagraphs(text, 4);

  return (
    <section className="tale-display">
      <div className="tale-display__wrapper wrapper">
        <h2 className="tale-display__title title">{title}</h2>
        <div className="tale-display__container">
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="tale-display__main-text description">
              {paragraph}
            </p>
          ))}
          {image && (
            <img
              src={image}
              alt="иллюстрация №1 к сказке"
              className="tale-display__image"
              width={1024}
              height={1024}
            />
          )}
        </div>
        <div className="tale-display__buttons-container">
          <SaveButton title={title} text={text} image={image} />
          <ButtonToMainPage />
        </div>
      </div>
    </section>
  );
};

export default TaleDisplay;
