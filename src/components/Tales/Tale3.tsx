import React from "react";
import ButtonToMainPage from "../Buttons/ButtonToMainPage";
import ButtonToLibraryPage from "../Buttons/ButtonToLibraryPage";
import img from "../../assets/images/earphones.webp";

const Tale3: React.FC = () => {
  return (
    <section className="tale-display">
      <div className="tale-display__wrapper wrapper">
        <h2 className="tale-display__title title">
          Приключения наушников и плеера в сумке школьника
        </h2>
        <div className="tale-display__container">
          <p className="tale-display__main-text description">
            Жили-были наушники по имени Ник и плеер по имени Мелоди. Они всегда
            были неразлучными друзьями и проводили веселые дни, слушая музыку
            вместе. Но однажды, когда их хозяин, маленький школьник Макс, решил
            положить их в свою школьную сумку, начались настоящие приключения.
          </p>
          <p className="tale-display__main-text description">
            Пока Макс не обратил внимания, Ник и Мелоди запутались друг в друге,
            когда сумка перевернулась в автобусе. Наушники были в полнейшем
            замешательстве, не понимая, как им выбраться из этой неприятной
            ситуации. Но тут на помощь им принесла добрая фея Музыка, которая
            услышала их мольбы о помощи.
          </p>
          <p className="tale-display__main-text description">
            Фея Музыка развязала узел наушников и плеера, освободив их от
            запутанных проводов, и дала им совет: "Возьмите друг друга за руку и
            держитесь крепко, чтобы больше не запутываться". Ник и Мелоди
            последовали совету феи и обещали быть более внимательными.
          </p>
          <p className="tale-display__main-text description">
            С тех пор наушники и плеер всегда держались вместе, помогая друг
            другу и помня урок, который им дала фея Музыка. И Макс, радуясь
            музыке, которую слушали его верные друзья, знал, что у него есть
            самые лучшие наушники и плеер во всем мире.
          </p>
          <img
            src={img}
            alt="Восточный базар"
            className="tale-display__image"
            width="1024"
            height="1024"
          ></img>
        </div>
        <div className="tale-display__route-buttons">
          <ButtonToMainPage />
          <ButtonToLibraryPage />
        </div>
      </div>
    </section>
  );
};

export default Tale3;
