import React from "react";
import styles from './Header.module.css';
import { HeaderProps } from "../../models/componentModels";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ title, toggleSidebar }) => {
    return (
        <header className={styles.header}>
            <Link to="/" className={`${styles.button} ${styles.hamburguer}`} onClick={toggleSidebar} ><GiHamburgerMenu aria-label="Menu-Hamburger"/></Link>
            <h1 className={styles.title}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>{title}</Link>
                </h1>
            <Link to="/" className={styles.button}><FaRegUser /></Link>
        </header>
    )
}

export default Header;