import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => (
    <footer>
        <div className={styles.footer}>
            <span>
                <a href="mailto:rflcardinali@gmail.com"><MdEmail  className={styles.icon}/></a>
            </span>
            <span>
                Desenvolvido por <strong>Rafael Cardinali</strong>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/rafael-cardinali-213899296/"><FaLinkedin className={styles.icon}/></a>
            </span>
        </div>
    </footer>
)

export default Footer;
