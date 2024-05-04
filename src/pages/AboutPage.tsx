import React from "react";
import ButtonToMainPage from "../components/ButtonToLibraryPage";

const AboutPage: React.FC = () => {
  return (
    <section className="about">
      <div className="about__wrapper  wrapper">
        <h2 className="about__title title">
          {" "}
          Добро пожаловать в мир сказочного творчества!
        </h2>
        <p className="about__description description">
        &#8226; Откройте дверь в волшебный мир, где каждый может стать творцом своей
          уникальной сказки. Здесь в вашем распоряжении — не просто слова, а
          целая палитра воображения, где вы сможете оживить любую историю,
          неважно, насколько она невероятна!
        </p>
        <p className="about__description description">
        &#8226; Создайте свой собственный эпос — будь то удивительное приключение в
          глубинах морей или героический эпос в заснеженных горных вершинах.
          Разгадайте тайны старинных замков, отправьтесь в путешествие по мирам,
          о которых можно было только мечтать. Наш интуитивно понятный
          конструктор позволяет вам выбрать героев и сценарии, добавить
          необходимую изюминку в сюжет и даже иллюстрировать свой рассказ
          великолепными картинками.
        </p>
        <p className="about__description description">
        &#8226; Поразите себя и своих близких: создайте уникальную сказку для детей
          или взрослых, в которой будет отражена ваша фантазия и теплота вашего
          сердца. Сказки объединяют поколения, и теперь вы можете создавать их
          вместе с любимыми. Начните своё путешествие — вдохните жизнь в свои
          мечты сегодня!
        </p>
        <ButtonToMainPage />
      </div>
    </section>
  );
};

export default AboutPage;
