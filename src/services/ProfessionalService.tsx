import axios from 'axios';
import { Professional } from '../models/professionalModels';
import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:3001';

export const ProfessionalService = {
    async createProfessional(professional: Professional): Promise<Professional> {
        const response = await axios.post(`${BASE_URL}/professionals`, professional);
        return response.data;
    }
};

const useFetchProfessionals = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await axios.get("http://localhost:3001/professionals");
        setProfessionals(response.data);
      } catch (error) {
        console.error("Error fetching professionals:", error);
      }
    }

    fetchProfessionals();
  }, []);

  return professionals;
};

export default useFetchProfessionals;




