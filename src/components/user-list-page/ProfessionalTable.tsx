import React from "react";
import styles from './UserListPage.module.css';
import { ProfessionalTableProps } from "../../models/ProfessionalTableModels";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const ProfessionalTable: React.FC<ProfessionalTableProps> = ({ professionals, onRowClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableTitle}>
        <span></span>
        <h4>Nome</h4>
        <h4>Status</h4>
        <h4>Ações</h4>
      </div>
      <div>
        {professionals.map((professional, index) => (
          <div key={professional.id} className={`${styles.tableInfo} ${index % 2 === 0 ? styles.oddRow : ''}`}>
            <p onClick={() => onRowClick(professional)}><FaMagnifyingGlass /></p>
            <p data-label="Nome" className={styles.tableName}>{professional.name}</p>
            <span><FaUser /></span>
            <div className={styles.actionButtons}>
              <span><FaEdit /></span>
              <span><FaTrash /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTable;
