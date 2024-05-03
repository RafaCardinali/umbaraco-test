import React from 'react';
import styles from './ModalExclusion.module.css';
import { ModalProps } from '../../models/ModalProps';

const ModalExclusion: React.FC<ModalProps> = ({ onConfirm, onCancel, children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Você tem certeza?</h2>
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
                {children}
            </div>
        </div>
    );
};

export default ModalExclusion;
