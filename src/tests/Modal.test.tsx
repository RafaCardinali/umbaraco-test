import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../components/modal-list/Modal";
import { Professional } from "../models/professionalModels";

describe('Modal Component', () => {
  const mockProfessional: Professional = {
      id: "1",
      name: "João Silva",
      vat: "123.456.789-09",
      ic: "90-12.345.678",
      birthDate: "1990-01-01",
      email: "joao.silva@example.com",
      phone: "(31) 98765-4321",
      address: "Rua das Flores, 123",
      district: "Centro",
      city: "Belo Horizonte",
      state: "MG",
      careRegion: "Região Metropolitana",
      careOption: "Presencial",
      consultationValue: "R$ 100,00",
      status: "Ativo",
      cep: "",
      professionalRegistration: "",
      photo: null
  };

  const mockOnClose = jest.fn();

  it('renders professional details correctly', () => {
    render(<Modal professional={mockProfessional} onClose={mockOnClose} />);

    expect(screen.getByText(/João Silva/)).toBeInTheDocument();
    expect(screen.getByText(/123.456.789-09/)).toBeInTheDocument();
    expect(screen.getByText(/90-12.345.678/)).toBeInTheDocument();
    expect(screen.getByText(/joao.silva@example.com/)).toBeInTheDocument();
    expect(screen.getByText(/\(31\) 98765-4321/)).toBeInTheDocument();
    expect(screen.getByText(/Rua das Flores, 123/)).toBeInTheDocument();
    expect(screen.getByText(/Centro/)).toBeInTheDocument();
    expect(screen.getByText(/Belo Horizonte/)).toBeInTheDocument();
    expect(screen.getByText(/MG/)).toBeInTheDocument();
    expect(screen.getByText(/Região Metropolitana/)).toBeInTheDocument();
    expect(screen.getByText(/Presencial/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 100,00/)).toBeInTheDocument();
    expect(screen.getByText(/Ativo/)).toBeInTheDocument();
  });

  it('closes modal when the close button is clicked', () => {
    render(<Modal professional={mockProfessional} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText('×'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('closes modal when the overlay is clicked but not when content is clicked', () => {
    render(<Modal professional={mockProfessional} onClose={mockOnClose} />);
    const modal = screen.getByRole('dialog');
    const modalContent = screen.getByText(/João Silva/).closest('div');
  
    fireEvent.click(modal);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  
    mockOnClose.mockReset();
  
    if (modalContent) {
      fireEvent.click(modalContent);
      expect(mockOnClose).not.toHaveBeenCalled();
    } else {
      throw new Error("Modal content is null");
    }
  });
});

