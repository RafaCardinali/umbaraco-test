import { useState, useEffect } from 'react';
import axios from 'axios';
import { Professional } from '../models/professionalModels';

const BASE_URL = 'http://localhost:3001';

const useFetchProfessionals = (): Professional[] => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await axios.get(`${BASE_URL}/professionals`);
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
