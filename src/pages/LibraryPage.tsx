import React from "react";

const LibraryPage: React.FC = () => {
  

  return (
    <section className="library">
      <div className="library__wrapper  wrapper">
      <h2 className="library__title title">Библиотека</h2>
    <ul className="library__list list">
      <li className="library__item">
        <a href="" className="library__link link" >Сказка №1</a>
      </li>
      <li className="library__item">
        <a href="" className="library__link link" >Сказка №2</a>
      </li>
      <li className="library__item">
        <a href="" className="library__link link" >Сказка №3</a>
      </li>
    </ul>
      </div>
    </section>
  );
};

export default LibraryPage;