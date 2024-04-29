import React from "react";
import styles from './Header.module.css';
import { HeaderProps } from "../../models/componentModels";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <a href="#" className={`${styles.button} ${styles.hamburguer}`} ><GiHamburgerMenu /></a>
            <h1 className={styles.title}>{title}</h1>
            <a href="#" className={styles.button}><FaRegUser /></a>
        </header>
    )
}

export default Header;