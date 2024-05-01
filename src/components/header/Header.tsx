import React from "react";
import styles from './Header.module.css';
import { HeaderProps } from "../../models/componentModels";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSidebarVisibility } from "../../hooks/SidebarVisibilityContext";

const Header: React.FC<HeaderProps> = ({ title }) => {
    const { toggleSidebar } = useSidebarVisibility();

    const handleToggleSidebar = () => {
        toggleSidebar();
    };

    return (
        <header className={styles.header}>
            <button className={`${styles.button} ${styles.hamburguer}`} onClick={handleToggleSidebar}><GiHamburgerMenu aria-label="Menu-Hamburger"/></button>
            <h1 className={styles.title}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>{title}</Link>
            </h1>
            <Link to="/" className={styles.button}><FaPlus /></Link>
        </header>
    );
}

export default Header;
