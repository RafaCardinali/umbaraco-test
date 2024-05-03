import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ProfessionalRegister from './components/professional-register/ProfessionalRegister';
import Home from './components/home/Home';
import UserListPage from './components/user-list-page/UserListPage';
import ProfessionalEditWrapper from './components/professional-edit/ProfessionalEditWrapper';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/professional-register" element={<ProfessionalRegister />} />
        <Route path='/professional-list' element={<UserListPage />}/>
        <Route path='/professional-edit/:id' element={<ProfessionalEditWrapper />}/>
        <Route path='*' element={<Home />}/>
    </Routes>
  );
};

export default AppRoutes;