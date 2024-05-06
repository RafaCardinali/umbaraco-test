import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
import { SidebarVisibilityContext } from '../hooks/SidebarVisibilityContext';

describe('Header Component', () => {
  const mockToggleSidebar = jest.fn();
  const mockIsVisible = false;

  const setup = (title: string) => {
    render(
      <Router>
        <SidebarVisibilityContext.Provider value={{ isVisible: mockIsVisible, toggleSidebar: mockToggleSidebar }}>
          <Header title={title} />
        </SidebarVisibilityContext.Provider>
      </Router>
    );
  };

  it('renders the header with correct title and links', () => {
    const testTitle = "Test Header";
    setup(testTitle);
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  
    const homeLink = screen.getAllByRole('link').find(link => link.getAttribute('href') === '/');
    expect(homeLink).toHaveAttribute('href', '/');
  
    const registerLink = screen.getAllByRole('link').find(link => link.getAttribute('href') === '/professional-register');
    expect(registerLink).toHaveAttribute('href', '/professional-register');
  });

  it('calls toggleSidebar when the hamburger menu button is clicked', () => {
    setup("Test Header");
    const hamburgerButton = screen.getByLabelText('Menu-Hamburger');
    fireEvent.click(hamburgerButton);
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
