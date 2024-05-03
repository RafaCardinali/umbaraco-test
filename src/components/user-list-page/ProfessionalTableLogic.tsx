import { useState, useEffect } from 'react';
import axios from 'axios';
import { Professional } from '../../models/professionalModels';

const BASE_URL = 'http://localhost:3001/professionals';

export const useProfessionalTableLogic = (initialProfessionals: Professional[]) => {
  const [professionals, setProfessionals] = useState<Professional[]>(initialProfessionals);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);

  const handleDelete = (professional: Professional) => {
    setSelectedProfessional(professional);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedProfessional) {
      try {
        await axios.delete(`${BASE_URL}/${selectedProfessional.id}`);
        setModalOpen(false);
        setSelectedProfessional(null);
        window.location.reload();
        setProfessionals(prev => prev.filter(p => p.id !== selectedProfessional.id));
      } catch (error) {
        console.error('Failed to delete professional:', error);
      }
    }
  };

  const handleEdit = (navigate: any, professionalId: string) => {
    navigate(`/professional-edit/${professionalId}`);
  };

  const handleToggleStatus = async (professional: Professional) => {
    const newStatus = professional.status === 'ativo' ? 'inativo' : 'ativo';
    try {
      const updatedProfessional = { ...professional, status: newStatus };
      await axios.put(`${BASE_URL}/${professional.id}`, updatedProfessional);
      setProfessionals(prevProfessionals => prevProfessionals.map(p =>
        p.id === professional.id ? { ...p, status: newStatus } : p
      ));
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar o status do profissional:', error);
    }
  };

  return { professionals, isModalOpen, setModalOpen, handleDelete, confirmDelete, handleEdit, handleToggleStatus };
};
