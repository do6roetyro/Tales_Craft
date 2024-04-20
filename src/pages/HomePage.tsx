import React from "react";
import { Link } from "react-router-dom";
import heroTitle from "../assets/images/hero.svg";
const HomePage: React.FC = () => {
  return (
    <section className="hero">
      <h2 className="visually-hidden">
        Tales Craft - путешествие в сказочный мир
      </h2>
      <img
        src={heroTitle}
        alt="Tales Craft"
        className="hero__image"
        width={250}
        height={300}
      />
      <div className="hero__container">
      <p className="hero__title title">Добро пожаловать в мир сказочного творчества!</p>
      <p className="hero__description description"> Откройте дверь в волшебный мир, где каждый может стать творцом своей
        уникальной сказки.</p>
      <Link to="/create" className="hero__link link">
        Начните путешествие!
      </Link>
      </div>
    </section>
  );
};

export default HomePage;
