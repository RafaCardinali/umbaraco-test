import axios from 'axios';
import { Professional } from '../models/professionalModels';

const BASE_URL = 'http://localhost:3001';

export const ProfessionalService = {
    async createProfessional(professional: Professional): Promise<Professional> {
        const response = await axios.post(`${BASE_URL}/professionals`, professional);
        return response.data;
    }
};


