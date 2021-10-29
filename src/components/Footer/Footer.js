import React, { useContext } from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { ThemeContext } from "../../context/ThemeContext";
import './footer.scss';

const Footer = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`footer-container ${darkMode ? "bg-dark-footer" : ""}`} >
            <p className={darkMode ? "bg-dark" : ""} >
                © 2021 Be-Pin Themes
            </p>
            <div className="footer-social-icons">
                <a
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: `${darkMode ? "#fff" : ""}` }}
                    id="github"
                    href="https://github.com/Bekir-Akok">
                    <SiGithub />
                </a>
                <a 
                id="linkedin"
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/Bekir-Akok/">
                    <SiLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
