import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaUser, FaUserSlash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ProfessionalTableProps } from "../../models/ProfessionalTableProps";
import { useProfessionalTableLogic } from './ProfessionalTableLogic';
import styles from './UserListPage.module.css';
import ModalExclusion from "../modal-exclusion/ModalExclusion";

const ProfessionalTable: React.FC<ProfessionalTableProps> = ({ professionals, onRowClick }) => {
  const {
    isModalOpen,
    setModalOpen,
    handleDelete,
    confirmDelete,
    handleEdit,
    handleToggleStatus
  } = useProfessionalTableLogic(professionals);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {isModalOpen && <ModalExclusion onConfirm={confirmDelete} onCancel={() => setModalOpen(false)} />}
      <div className={styles.tableTitle}>
        <span></span>
        <h4>Nome</h4>
        <h4>Status</h4>
        <h4>Ações</h4>
      </div>
      <div>
        {professionals.map((professional, index) => (
          <div key={professional.id} className={`${styles.tableInfo} ${index % 2 === 0 ? styles.oddRow : ''} ${professional.status === 'inativo' ? styles.inactiveRow : ''}`}>
            <p onClick={() => onRowClick(professional)}><FaMagnifyingGlass /></p>
            <p data-label="Nome">{professional.name}</p>
            <span onClick={() => handleToggleStatus(professional)}>
              {professional.status === 'ativo' ? <FaUser /> : <FaUserSlash />}
            </span>
            <div className={styles.actionButtons}>
              <span onClick={() => handleEdit(navigate, professional.id)}><FaEdit /></span>
              <span onClick={() => handleDelete(professional)}><FaTrash /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTable;
