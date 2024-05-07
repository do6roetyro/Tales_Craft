import React from "react";
import { Link } from "react-router-dom";
import vkLogo from "../../assets/images/vk.svg";
import githubLogo from "../../assets/images/git.svg";

interface FooterProps {
  aboutLinkText: string;
  supportLinkText: string;
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
  aboutLinkText,
  supportLinkText,
  copyrightText,
}) => {
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <ul className="social list">
          <li className="social__item">
            <a
              className="social__link social__link--vk link"
              href="https://vk.com/go6poeytpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">Вконтакте</span>
              <img
                src={vkLogo}
                alt="Вконтакте"
                className="social__logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className="social__item">
            <a
              className="social__link social__link--github link"
              href="https://github.com/do6roetyro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">Гитхаб</span>
              <img
                src={githubLogo}
                alt="Гитхаб"
                className="social__logo"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
        <nav className="main-footer__nav footer-nav">
          <Link to="/instruction" className="footer-nav__link link">
            {aboutLinkText}
          </Link>
          <Link to="/contacts" className="footer-nav__link link">
            {supportLinkText}
          </Link>
        </nav>
      </div>
      <div className="main-footer__copyright copyright">
        {copyrightText}

        <a
          className="copyright__link link"
          href="https://github.com/do6roetyro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Разработано dobroeytro
        </a>
      </div>
    </footer>
  );
};

export default Footer;
