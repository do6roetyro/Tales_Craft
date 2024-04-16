import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 h-screen flex flex-col justify-center items-center text-center px-4">
    <h2 className="text-5xl text-blue-800 font-bold mb-4">Tales Craft</h2>
    <p className="text-2xl text-blue-700 mb-8">Создай своё сказочное путешествие</p>
    <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
      Начните своё путешествие!
    </button>
  </div>
  );
};

export default HomePage;