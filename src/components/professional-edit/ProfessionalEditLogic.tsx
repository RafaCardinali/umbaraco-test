import { useState, useEffect } from 'react';
import axios from 'axios';
import AdressService from '../../services/AddressService';
import { FormValues, Professional } from '../../models/professionalModels'; 
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:3001/professionals';

export const ProfessionalEditLogic = (professionalId: number) => {
    const [values, setValues] = useState<FormValues>({
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
        cep: '',
        professionalRegistration: '',
        careRegion: '',
        careOption: '',
        photo: null,
        consultationValue: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfessional = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<Professional>(`${BASE_URL}/${professionalId}`);
                setValues(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do profissional:', error);
            }
            setIsLoading(false);
        };

        if (professionalId) {
            fetchProfessional();
        }
    }, [professionalId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
        if (name === 'cep' && value.replace(/\D/g, '').length === 8) {
            handleCepChange(value);
        }
    };

    const handleCepChange = async (cep: string) => {
        try {
            const addressData = await AdressService.fetchAddressByCep(cep);
            setValues(prevValues => ({
                ...prevValues,
                address: addressData.logradouro,
                district: addressData.bairro,
                city: addressData.localidade,
                state: addressData.uf
            }));
        } catch (error) {
            console.error('Falha ao buscar dados do CEP:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.put(`${BASE_URL}/${professionalId}`, values);
            alert('Dados atualizados com sucesso!');
            navigate('/professional-list');
        } catch (error) {
            console.error('Falha ao atualizar profissional:', error);
            alert('Falha ao atualizar profissional.');
        }
        setIsLoading(false);
    };

    return { values, handleChange, handleSubmit, isLoading };
};
