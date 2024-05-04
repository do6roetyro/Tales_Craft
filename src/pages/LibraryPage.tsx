import React from "react";
import { Link } from "react-router-dom";

const LibraryPage: React.FC = () => {
  return (
    <section className="library">
      <div className="library__wrapper  wrapper">
        <h2 className="library__title title">Библиотека</h2>
        <ul className="library__list list">
          <li className="library__item">
            <Link to="/tale1" className="library__link link">
              Путешествие на марc
            </Link>
          </li>
          <li className="library__item">
            <Link to="/tale2" className="library__link link">
              Приключения восточных ковров
            </Link>
          </li>
          <li className="library__item">
            <Link to="/tale3" className="library__link link">
              Приключения наушников и плеера в сумке школьника
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LibraryPage;
