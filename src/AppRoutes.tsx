import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfessionalRegister from './components/professional-register/ProfessionalRegister';
import Home from './components/home/Home';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/professional-register" element={<ProfessionalRegister />} />
        <Route path='*' element={<Home />}/>
    </Routes>
  );
};

export default AppRoutes;
