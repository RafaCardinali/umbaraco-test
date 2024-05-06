import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfessionalRegister from '../components/professional-register/ProfessionalRegister';
import { useFormRegister } from '../components/professional-register/ProfessionalRegisterLogic';
import { formFields } from '../components/professional-register/formFieldConfig';
import { getInputMask } from '../components/professional-register/inputMasks';

// Mocks para serviços externos
jest.mock('../services/ProfessionalService');
jest.mock('../services/AddressService');

describe('Form Fields Configuration', () => {
  it('contains all necessary fields', () => {
    const requiredFields = ['name', 'vat', 'ic', 'birthDate', 'email', 'phone', 'cep', 'address', 'district', 'city', 'state', 'professionalRegistration', 'careRegion', 'careOption', 'photo', 'consultationValue'];
    requiredFields.forEach(field => {
      expect(formFields.some(f => f.name === field)).toBe(true);
    });
  });

  it('checks field requirements', () => {
    expect(formFields.find(f => f.name === 'email')?.required).toBeFalsy();
    expect(formFields.find(f => f.name === 'name')?.required).toBeTruthy();
  });
});

describe('Input Masks', () => {
  it('returns correct masks for fields', () => {
    expect(getInputMask('vat')).toEqual([/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]);
    expect(getInputMask('name')).toBeNull();
  });
});

describe('ProfessionalRegister Component', () => {
  it('renders all input fields', () => {
    const { getByPlaceholderText } = render(<ProfessionalRegister />);
    formFields.forEach(field => {
      if (!['select', 'file'].includes(field.type)) {
        expect(getByPlaceholderText(field.placeholder)).toBeInTheDocument();
      }
    });
  });

  it('handles form submission', async () => {
    const { getByPlaceholderText, getByText } = render(<ProfessionalRegister />);
    const nameInput = getByPlaceholderText('Nome') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const submitButton = getByText('Cadastrar');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput.value).toBe('John Doe');
    });
  });

  it('updates form values on input change', () => {
    const TestComponent = () => {
      const { values, handleChange } = useFormRegister();
      return (
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          data-testid="name-input"
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const nameInput = getByTestId('name-input') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    expect(nameInput.value).toBe('Jane Doe');
  });
});
