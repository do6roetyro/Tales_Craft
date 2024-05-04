import React from "react";
import ButtonToMainPage from "../ButtonToMainPage";
import ButtonToLibraryPage from "../ButtonToLibraryPage";
import img from '../../assets/images/eastcarpets.webp'

const Tale2: React.FC = () => {
  return (
    <section className="tale-display">
      <div className="tale-display__wrapper wrapper">
        <h2 className="tale-display__title title">
          Приключения восточных ковров
        </h2>
        <div className="tale-display__container">
          <p className="tale-display__main-text description">
            В далёком восточном городе, где пахло пряностями и цветами, был
            большой и шумный базар. На этом базаре продавались самые разные
            вещи, но самыми красивыми считались восточные ковры. Эти ковры были
            не просто коврами – они были волшебными! Однажды, на одном из
            прилавков базара, рядом лежали два ковра – Азиз и Ясмин. Азиз был
            ковёр с узорами глубокого синего цвета, напоминающими морскую волну,
            а Ясмин был украшен изображениями нежнейших розовых цветов. Они были
            очень разные, но каждый из них мечтал о приключениях и о том, чтобы
            найти настоящую любовь. Однажды утром, когда базар только проснулся,
            ветер шепнул им о далёкой стране, где живут ковры, свободно летающие
            под облаками.
          </p>
          <p className="tale-display__main-text description">
            Азиз и Ясмин решили, что должны отправиться туда и узнать, что такое
            настоящая свобода и любовь. Как только на базаре стало темнеть и все
            продавцы стали уходить домой, Азиз и Ясмин осторожно спустились на
            землю и, взмахнув своими краями, начали медленно подниматься в
            воздух. Вскоре они уже парили над базаром, а потом и над всем
            городом, любуясь звёздами и луной. Их путешествие было полно
            приключений. Они встретили облака, которые учили их играть в прятки,
            и звёзды, которые рассказывали им истории далёких галактик.
          </p>
          <p className="tale-display__main-text description">
            Но самым важным для них было открытие, что вместе они могут делать
            всё – и даже летать быстрее и выше. С каждым днём Азиз и Ясмин всё
            сильнее привязывались друг к другу. Они поняли, что настоящая любовь
            – это не только восхищение красотой, но и поддержка, доверие и
            способность преодолевать трудности вместе. Однажды утром, когда они
            приземлились на вершине высокой горы, чтобы полюбоваться рассветом,
            Азиз сказал Ясмин: "Я никогда не чувствовал себя так счастливым, как
            с тобой рядом. Ты – моя настоящая любовь." Ясмин ответила: "И я тоже
            никогда не была так счастлива. Мы нашли не только свободу, но и
            настоящую любовь."
          </p>
          <p className="tale-display__main-text description">
            Когда они вернулись на базар, продавцы были удивлены, увидев, как
            Азиз и Ясмин сверкают на солнце и радуются жизни. С тех пор они
            всегда оставались вместе, напоминая всем о том, что настоящая любовь
            и искренняя дружба могут преодолеть любые препятствия.
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

export default Tale2;
