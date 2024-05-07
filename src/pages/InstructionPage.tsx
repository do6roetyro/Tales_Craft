import React from "react";
import { Link } from "react-router-dom";
import ContactsPage from "./ContactsPage";

const InstructionPage: React.FC = () => {
  return (
    <section className="instruction">
      <div className="instruction__wrapper  wrapper">
        <h2 className="instruction__title title">О приложении</h2>
        <ul className="instruction__list list">
          <li className="instruction__item">
            Приложение "Tales Craft" создано мною в рамках тренировки навыков
            веб-разработки c применением современных инструментов. За создание
            сказочных текстов и иллюстраций отвечает нейросеть OpenAI API.
          </li>
          <li className="instruction__item">
            Прежде чем нажать кнопку 'СОЗДАТЬ СКАЗКУ' необходимо заполнить, как
            минимум, обязательные поля - Основная тема, Герои сказки, Окружение
            и Возраст ребенка. А также <b>включить VPN!</b>
          </li>
          <li className="instruction__item">
            Создание сказки занимает некоторе время - от 30 секунд до 2 минут. В
            зависимости от нагрузки на сервер и варианта запроса - с
            иллюстрациями или без них.
          </li>
          <li className="instruction__item">
            Иллюстрации к сказке могут создаваться нестабильно. Это связано с
            тем, что данное приложение работает через мой аккаунт в OpenAI,
            который имеет ограничения на частоту создания изображений. Поэтому
            имейте ввиду, что иллюстрация может не создаться.
          </li>
          <li className="instruction__item">
            Все созданные Вами материалы являются общедоступными и могут быть
            распространены и использованы другими лицами. Иными словами,
            авторство на созданный нейросетью контент отсутствует.
          </li>
          <li className="instruction__item">
            Также обращаю внимание, что, я - разработчик приложения, не несу
            ответственности за созданный контент. Запрещено использовать данное
            приложение для создания контента для несовершеннолетних.
          </li>
          <li className="instruction__item">
            Если Вы хотите связаться со мной, оставить отзыв о приложении,
            отблагодарить, поругать, предложить сотрудничество - &nbsp;
            <Link to="/contacts" className="instruction__link link"><b>свяжитесь со мной</b></Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InstructionPage;
