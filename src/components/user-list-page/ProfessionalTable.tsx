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
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableTitle}>
            <th className={styles.topic} scope="col"></th>
            <th className={styles.topic} scope="col">Nome</th>
            <th className={styles.topic} scope="col">Status</th>
            <th className={styles.topic} scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {professionals.map((professional, index) => (
            <tr key={professional.id} 
                className={`${index % 2 === 0 ? styles.oddRow : ''} ${professional.status === 'inativo' ? styles.inactiveRow : ''}`}>
              <td onClick={() => onRowClick(professional)} className={styles.actionButtons} aria-label="Visualizar detalhes"><FaMagnifyingGlass /></td>
              <td>{professional.name}</td>
              <td onClick={() => handleToggleStatus(professional)} className={styles.actionButtons}>
                {professional.status === 'ativo' ? <FaUser aria-label="Usuário ativo"/> : <FaUserSlash aria-label="Usuário inativo"/>}
              </td>
              <td className={styles.actionButtons}>
                <span onClick={() => handleEdit(navigate, professional.id)} aria-label="Editar"><FaEdit /></span>
                <span onClick={() => handleDelete(professional)} aria-label="Deletar"><FaTrash /></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessionalTable;
