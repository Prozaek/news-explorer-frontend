import React from "react";
import { Link } from "react-router-dom";
import git from "../../images/svg/git.svg";
import facebook from "../../images/svg/facebook.svg";
import "./Footer.css";
import {facebookUrl, githubUrl, yandexUrl} from "../../constants/constants"


function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <nav className="footer__nav">
                <ul className="footer__links">
                    <li className="footer__li">
                        <Link className="footer__link" to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="footer__li">
                        <a className="footer__link" href={yandexUrl}>
                            Яндекс.Практикум
                        </a>
                    </li>
                </ul>
                <ul className="footer__social">
                    <li className="footer__li">
                        <a className="footer__link" href={githubUrl}>
                            <img src={git} className="footer__icon" alt="Логотип Гит" />
                        </a>
                    </li>
                    <li className="footer__li">
                        <a className="footer__link" href={facebookUrl}>
                            <img src={facebook} className="footer__icon" alt="Логотип Фейсбук" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
