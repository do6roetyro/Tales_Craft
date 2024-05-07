import React from "react";
import ContactLink from "../components/Links/ContactLink";
import vkLogo from "../assets/images/vk-1.svg";
import yandexLogo from "../assets/images/yandex.svg";
import gmailLogo from "../assets/images/gmail.svg";
import telegramLogo from "../assets/images/tg.svg";

const ContactsPage: React.FC = () => {
  return (
    <section className="contacts">
      <div className="contacts__wrapper  wrapper">
        <h2 className="contacts__title title">Мои контакты</h2>
        <ul className="contacts__list list">
          <li className="contacts__item">
            <ContactLink
              name="VKontakte"
              link="https://vk.com/go6poeytpo"
              logo={vkLogo}
            />
          </li>
          <li className="contacts__item">
            <ContactLink
              name="Почта Яндекс"
              link="mailto:do6roeytro@yandex.ru"
              logo={yandexLogo}
            />
          </li>
          <li className="contacts__item">
            <ContactLink
              name="Google Mail"
              link="mailto:warm.citrus@gmail.com"
              logo={gmailLogo}
            />
          </li>
          <li className="contacts__item">
            <ContactLink
              name="Telegram"
              link="https://t.me/Do6poeytpo"
              logo={telegramLogo}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactsPage;
