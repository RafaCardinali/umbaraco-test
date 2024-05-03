import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { useSidebarVisibility } from "../../hooks/SidebarVisibilityContext";
import { useMediaQuery } from 'react-responsive';
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { isVisible } = useSidebarVisibility();
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <aside className={`${styles.sidebar} ${isVisible || isDesktop ? styles.visible : ''}`}>
            <nav>
                <ul>
                    <li className={styles.link}><Link to="/"><FaHome />Home</Link></li>
                    <li className={styles.link}><Link to="/professional-register"><FaPlus />Novo Cadastro</Link></li>
                    <li className={styles.link}><Link to="/professional-list"><FaListUl />Lista de Profissionais</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;