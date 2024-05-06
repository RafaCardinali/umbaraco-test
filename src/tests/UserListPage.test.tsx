import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserListPage from '../components/user-list-page/UserListPage';
import ProfessionalTable from '../components/user-list-page/ProfessionalTable';
import axios from 'axios';
import { Professional } from '../models/professionalModels';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const professionalsMock: Professional[] = [
  { 
    id: '1', 
    name: 'João', 
    status: 'ativo',
    vat: '', 
    ic: '', 
    birthDate: '', 
    email: '', 
    phone: '', 
    address: '', 
    district: '', 
    city: '', 
    state: '', 
    cep: '', 
    professionalRegistration: '', 
    careRegion: '', 
    careOption: '', 
    photo: null,
    consultationValue: ''
  },
  { 
    id: '2', 
    name: 'Maria', 
    status: 'inativo',
    vat: '', 
    ic: '', 
    birthDate: '', 
    email: '', 
    phone: '', 
    address: '', 
    district: '', 
    city: '', 
    state: '', 
    cep: '', 
    professionalRegistration: '', 
    careRegion: '', 
    careOption: '', 
    photo: null,
    consultationValue: ''
  }
];

describe('UserListPage Component', () => {
  it('renders correctly and displays professionals', () => {
    const { getByText } = render(<BrowserRouter><UserListPage /></BrowserRouter>);
    expect(getByText('Lista de Profissionais')).toBeInTheDocument();
  });
});

describe('ProfessionalTable Component', () => {
  it('renders professional data in rows', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProfessionalTable 
          professionals={professionalsMock} 
          onRowClick={() => {}} 
          onEdit={() => {}} 
          onDelete={() => {}}
        />
      </BrowserRouter>
    );
    expect(getByText('João')).toBeInTheDocument();
    expect(getByText('Maria')).toBeInTheDocument();
  });
});
