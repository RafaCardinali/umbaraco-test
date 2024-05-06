import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home/Home';

describe('Home Component', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const titleElement = screen.getByText('Bem vindo!');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the correct description', () => {
    render(<Home />);
    const descriptionElement = screen.getByText('Cadastro de Profissionais da Saúde');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('has a link to professional registration', () => {
    render(<Home />);
    const linkElement = screen.getByRole('link', { name: 'Cadastre-se Aqui!' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/professional-register');
  });
});