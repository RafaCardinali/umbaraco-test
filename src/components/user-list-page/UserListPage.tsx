import React, { useState, useEffect } from "react";
import useFetchProfessionals from "../../hooks/useFetchProfessionals";
import { deleteProfessional } from "../../services/ProfessionalService";
import ProfessionalTable from "./ProfessionalTable";
import Modal from "../modal-list/Modal";
import { Professional } from "../../models/professionalModels";
import styles from './UserListPage.module.css';

const UserListPage: React.FC = () => {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const professionals = useFetchProfessionals();

  const handleRowClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const handleCloseModal = () => {
    setSelectedProfessional(null);
  };

  function handleEdit(professional: Professional): void {}

  function handleDelete(professional: Professional): void {
    if (window.confirm("Você tem certeza que deseja excluir este profissional?")) {
      deleteProfessional(professional.id)
        .then(() => {
          alert("Cadastro deletado com sucesso.");
          window.location.reload();
        })
        .catch(error => {
          console.error("Falha ao deletar profissional:", error);
          alert("Falha ao deletar profissional.");
        });
    }
  }

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Lista de Profissionais</h2>
      <ProfessionalTable
        professionals={professionals}
        onRowClick={handleRowClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {selectedProfessional && <Modal professional={selectedProfessional} onClose={handleCloseModal} />}
    </div>
  );
};

export default UserListPage;
