import React from "react";
import styles from './Modal.module.css';
import { Professional } from "../../models/professionalModels";

interface ModalProps {
  professional: Professional;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ professional, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>Detalhes do Profissional</h2>
        <p><strong>ID: </strong>{professional.id}</p>
        <p><strong>Nome:</strong> {professional.name}</p>
        <p><strong>CPF:</strong> {professional.vat}</p>
        <p><strong>RG:</strong> {professional.ic}</p>
        <p><strong>Data de Nascimento:</strong> {professional.birthDate}</p>
        <p><strong>Email:</strong> {professional.email}</p>
        <p><strong>Telefone:</strong> {professional.phone}</p>
        <p><strong>Endereço:</strong> {professional.address}</p>
        <p><strong>Região de Atendimento:</strong> {professional.careRegion}</p>
        <p><strong>Opção de Atendimento:</strong> {professional.careOption}</p>
        <p><strong>Valor da Consulta:</strong> {professional.consultationValue}</p>
        <p><strong>Status:</strong> {professional.status}</p>
      </div>
    </div>
  );
};

export default Modal;
