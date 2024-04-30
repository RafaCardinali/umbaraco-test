import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 768) {
              setIsSidebarVisible(true);
          } else {
              setIsSidebarVisible(false);
          }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <Router>
        <React.Fragment>
          <Header title='UmBaraco' toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
          <Sidebar toggle={() => setIsSidebarVisible(!isSidebarVisible)} isVisible={isSidebarVisible} />
        </React.Fragment>
      </Router>
    );
}

export default App;
