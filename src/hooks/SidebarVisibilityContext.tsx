import { useState, useCallback, createContext, useContext } from 'react';
import { SidebarVisibilityProviderProps } from '../models/componentModels';

const SidebarVisibilityContext = createContext<{
    isVisible: boolean;
    toggleSidebar: () => void;
}>({
    isVisible: false,
    toggleSidebar: () => {},
});

export const useSidebarVisibility = () => useContext(SidebarVisibilityContext);

export const SidebarVisibilityProvider: React.FC<SidebarVisibilityProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleSidebar = useCallback(() => {
      setIsVisible(prev => !prev);
    }, []);
  
    return (
      <SidebarVisibilityContext.Provider value={{ isVisible, toggleSidebar }}>
        { children }
      </SidebarVisibilityContext.Provider>
    );
  };