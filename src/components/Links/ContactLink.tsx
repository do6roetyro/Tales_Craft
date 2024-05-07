import React from "react";

interface ContactLinkProps {
  name: string;
  link: string;
  logo: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ name, link, logo }) => {
  return (
    <a
      className="contacts__link link"
      target="_blank"
      href={link}
      rel="noreferrer"
    >
        <img className="contacts__logo" src={logo} alt={`Логотип соцсети ${name}`}  width={64} height={64}/>
     
    </a>
  );
};

export default ContactLink;
