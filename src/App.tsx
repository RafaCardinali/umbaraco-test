import React from 'react';
import './styles/App.css';
import styles from './styles/App.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import AppRoutes from './AppRoutes';
import { SidebarVisibilityProvider } from './hooks/SidebarVisibilityContext';

const App: React.FC = () => {
  return (
    <SidebarVisibilityProvider>
      <Router>
        <Header title='UmBaraco' />
        <div className={styles.main}>
          <Sidebar />
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </SidebarVisibilityProvider>
  );
};

export default App;