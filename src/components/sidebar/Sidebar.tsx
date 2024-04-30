import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../../models/componentModels'; // Verifique o caminho

const Sidebar: React.FC<SidebarProps> = ({ toggle, isVisible }) => {
    return (
        <aside className={`${styles.sidebar} ${isVisible ? styles.visible : ''}`}>
            <nav>
                <ul>
                    <li className={styles.link}><Link to="/" >Home</Link></li>
                    <li className={styles.link}><Link to="/" >About</Link></li>
                    <li className={styles.link}><Link to="/" >Services</Link></li>
                    <li className={styles.link}><Link to="/" >Contact</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
