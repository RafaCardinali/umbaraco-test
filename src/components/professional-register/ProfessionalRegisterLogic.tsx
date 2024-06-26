import React, { useState } from "react";
import { FormValues } from "../../models/professionalModels";
import { createProfessional } from "../../services/ProfessionalService";
import { Professional } from "../../models/professionalModels";
import AddressService from "../../services/AddressService";

export const useFormRegister = () => {
    const initialState = {
        name: '',
        vat: '',
        ic: '',
        birthDate: '',
        email: '',
        phone: '',
        address: '',
        district: '',
        city: '',
        state: '',
        professionalRegistration: '',
        careRegion: '',
        careOption: '',
        photo: null,
        consultationValue: '',
        cep: '',
        status: 'ativo'
    };
    
    const [values, setValues] = useState<FormValues>(initialState);
    const [cep, setCep] = useState('');

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        if (name === 'photo' && e.target instanceof HTMLInputElement) {
            const files = e.target.files;
            if (files && files[0]) {
                if (files[0].type !== 'image/jpeg') {
                    alert("Por favor, selecione um arquivo JPEG.");
                    e.target.value = '';
                    return;
                }
                setValues({
                    ...values,
                    [name]: files[0],
                });
            } else {
                setValues({
                    ...values,
                    [name]: null,
                });
            }
        } else if (name === 'vat') {
            setValues({
                ...values,
                [name]: value,
            });
        } else if (name === 'cep') {
            setCep(value);
            if (value.length === 9) {
                try {
                    const addressData = await AddressService.fetchAddressByCep(value);
                    setValues(prevValues => ({
                        ...prevValues,
                        address: addressData.logradouro,
                        district: addressData.bairro,
                        city: addressData.localidade,
                        state: addressData.uf,
                        cep: value
                    }));
                } catch (error) {
                    console.error('Error fetching address:', error);
                }
            } else {
                setValues(prevValues => ({
                    ...prevValues,
                    cep: value
                }));
            }
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    };
    
    

    const checkCPF = async (vat: string) => {
        try {
            const response = await fetch(`http://localhost:3001/professionals?vat=${vat}`);
            const data = await response.json();
            return data.length > 0;
        } catch (error) {
            console.error('Error checking CPF:', error);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const { email, phone, vat } = values;
    
        if (!email.trim() && !phone.trim()) {
            alert("Por favor insira pelo menos o email ou telefone.");
            return;
        }
    
        const cpfExists = await checkCPF(vat);
        if (cpfExists) {
            alert("CPF já registrado. Impossível seguir com cadastro.");
            return;
        }
    
        try {
            await createProfessional(values as Professional);
            alert("Cadastro realizado!");
            setValues(initialState);
        } catch (error) {
            alert("Erro ao criar cadastro. Tente de novo.");
        }
    };

    return { values, setValues, handleChange, handleSubmit };
};
