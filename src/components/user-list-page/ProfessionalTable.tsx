import React, { useState } from "react";
import { ProfessionalTableProps } from "../../models/ProfessionalTableProps";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import styles from './UserListPage.module.css';
import ModalExclusion from "../modal-exclusion/ModalExclusion";
import { Professional } from "../../models/professionalModels";

const ProfessionalTable: React.FC<ProfessionalTableProps> = ({ professionals, onRowClick, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const navigate = useNavigate();

  const handleDelete = (professional: Professional) => {
    setSelectedProfessional(professional);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedProfessional) {
      await onDelete(selectedProfessional);
      setModalOpen(false);
      setSelectedProfessional(null);
    }
  };

  const handleEdit = (professional: Professional) => {
    navigate(`/professional-edit/${professional.id}`);
  };

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
          <div key={professional.id} className={`${styles.tableInfo} ${index % 2 === 0 ? styles.oddRow : ''}`}>
            <p onClick={() => onRowClick(professional)}><FaMagnifyingGlass /></p>
            <p data-label="Nome">{professional.name}</p>
            <span><FaUser /></span>
            <div className={styles.actionButtons}>
              <span onClick={() => handleEdit(professional)}><FaEdit /></span>
              <span onClick={() => handleDelete(professional)}><FaTrash /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTable;
