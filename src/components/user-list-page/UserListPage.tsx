import React, { useState } from "react";
import useFetchProfessionals from "../../services/ProfessionalService";
import ProfessionalTable from "./ProfessionalTable";
import Modal from "../modal/Modal";
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

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Lista de Profissionais</h1>
      <ProfessionalTable professionals={professionals} onRowClick={handleRowClick} />
      {selectedProfessional && <Modal professional={selectedProfessional} onClose={handleCloseModal} />}
    </div>
  );
};

export default UserListPage;
