import React from "react";
import printLogo from "../../assets/images/print.svg";
import saveLogo from "../../assets/images/save.svg";
import shareLogo from "../../assets/images/share.svg";
import savePdf from "../../utils/savePdf";

interface TaleDisplayOptionButtonsProps {
  title: string;
  text: string;
  image?: string;
}

const TaleDisplayOptionButtons: React.FC<TaleDisplayOptionButtonsProps> = ({ title, text, image }) => {
return (
    <div className="tale-display__option-buttons">
    <button
      type="button"
      className="tale-display__button tale-display__button--save button"
      onClick={() => savePdf(title, text, image)}
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
)
}

export default TaleDisplayOptionButtons
