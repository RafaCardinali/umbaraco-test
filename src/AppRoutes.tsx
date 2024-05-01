import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfessionalRegister from './components/professional-register/ProfessionalRegister';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/professional-register" element={<ProfessionalRegister />} />
    </Routes>
  );
};

export default AppRoutes;
