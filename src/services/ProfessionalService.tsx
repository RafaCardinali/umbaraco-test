import axios from 'axios';
import { Professional } from '../models/professionalModels';

const BASE_URL = 'http://localhost:3001';

export const createProfessional = async (professional: Professional): Promise<Professional> => {
    const response = await axios.post(`${BASE_URL}/professionals`, professional);
    return response.data;
};

export const updateProfessional = async (id: string, professional: Professional): Promise<Professional> => {
    const response = await axios.put(`${BASE_URL}/professionals/${id}`, professional);
    return response.data;
};

export const deleteProfessional = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/professionals/${id}`);
};