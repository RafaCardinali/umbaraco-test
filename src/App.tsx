import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { SidebarVisibilityProvider } from './hooks/SidebarVisibilityContext';

const App: React.FC = () => {
  return (
    <SidebarVisibilityProvider>
      <Router>
        <Header title='UmBaraco' />
        <Sidebar />
      </Router>
    </SidebarVisibilityProvider>
  );
};

export default App;