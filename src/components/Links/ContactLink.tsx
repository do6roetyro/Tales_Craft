import React from "react";
import stripPrefixLink from "../../utils/stripPrefixLink";

interface ContactLinkProps {
  name: string;
  link: string;
  logo: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ name, link, logo }) => {
  const strippedlink = stripPrefixLink(link);
  return (
    <a
      className="contacts__link link"
      target="_blank"
      href={link}
      rel="noreferrer"
    >
      <div className="contacts__container">
        <img
          className="contacts__logo"
          src={logo}
          alt={`Логотип соцсети ${name}`}
          width={64}
          height={64}
        />
        <span className="contacts__text">{strippedlink}</span>
      </div>
    </a>
  );
};

export default ContactLink;
