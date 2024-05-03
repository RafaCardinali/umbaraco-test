import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProfessionalEdit from './ProfessionalEdit';

const ProfessionalEditWrapper = () => {
  const { id } = useParams<{ id: string | undefined }>();

  if (!id) {
    return <Navigate to="/professional-list" />;
  }

  const professionalId = parseInt(id, 10);

  if (isNaN(professionalId)) {
    return <Navigate to="/professional-list" />;
  }

  return <ProfessionalEdit professionalId={professionalId} />;
};

export default ProfessionalEditWrapper;
