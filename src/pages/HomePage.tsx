import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-5xl text-blue-800 font-bold mb-4">Tales Craft</h2>
      <p className="text-2xl text-blue-700 mb-8">
        Создай своё сказочное путешествие
      </p>
      <Link
        to="/create"
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Начните своё путешествие!
      </Link>
    </section>
  );
};

export default HomePage;
