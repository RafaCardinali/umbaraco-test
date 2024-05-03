import axios from 'axios';
import { Professional } from '../models/professionalModels';

const BASE_URL = 'http://localhost:3001';

function convertFileToBase64(file: Blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

export const createProfessional = async (professionalData: Professional) => {
    const { photo, ...dataWithoutPhoto } = professionalData;
    let photoBase64 = null;

    if (photo instanceof File) {
        photoBase64 = await convertFileToBase64(photo);
    }

    try {
        const dataToSend = {
            ...dataWithoutPhoto,
            photo: photoBase64
        };
        const response = await axios.post(`${BASE_URL}/professionals`, dataToSend);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProfessional = async (id: string, professional: Professional): Promise<Professional> => {
    const response = await axios.put(`${BASE_URL}/professionals/${id}`, professional);
    return response.data;
};

export const deleteProfessional = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/professionals/${id}`);
};
