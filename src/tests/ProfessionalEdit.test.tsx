import React, { ChangeEvent } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProfessionalEdit from '../components/professional-edit/ProfessionalEdit';
import { ProfessionalEditLogic } from '../components/professional-edit/ProfessionalEditLogic';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: { name: 'Test User', email: 'test@example.com' } }),
  put: jest.fn().mockResolvedValue({ data: { message: 'Success' } })
}));

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
  useParams: () => ({ id: '123' })
}));

interface TestComponentProps {
  professionalId: number;
}

function TestComponent({ professionalId }: TestComponentProps) {
  const hookResults = ProfessionalEditLogic(professionalId);
  
  function simulateChangeEvent() {
    const changeEvent: ChangeEvent<HTMLInputElement> = {
      target: {
        name: 'email',
        value: 'new@example.com'
      } as HTMLInputElement,
      type: 'change',
      preventDefault: () => { },
      nativeEvent: new Event('change'),
      currentTarget: document.createElement('input'),
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      isTrusted: true,
      timeStamp: Date.now(),
      persist: () => { },
      isDefaultPrevented: () => false,
      isPropagationStopped: () => false,
      stopPropagation: () => { },
      eventPhase: 0
    };
    hookResults.handleChange(changeEvent);
  }

  return (
    <div>
      {hookResults.values.email && <div>Current Email: {hookResults.values.email}</div>}
      <button onClick={simulateChangeEvent}>Change Email</button>
    </div>
  );
}

describe('ProfessionalEdit', () => {
  const setup = () => {
    return render(
      <MemoryRouter>
        <ProfessionalEdit professionalId={123} />
      </MemoryRouter>
    );
  };

  it('should render form correctly', () => {
    const { getByText, getByPlaceholderText } = setup();
    expect(getByText('Editar')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const { getByText } = setup();
    fireEvent.click(getByText('Editar'));
    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/professionals/123', expect.any(Object));
      expect(mockedNavigate).toHaveBeenCalledWith('/professional-list');
    });
  });
});

describe('ProfessionalEditLogic Hook', () => {
  it('should handle input change', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <TestComponent professionalId={123} />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Change Email'));
    await waitFor(() => {
      expect(getByText('Current Email: new@example.com')).toBeInTheDocument();
    });
  });
});
