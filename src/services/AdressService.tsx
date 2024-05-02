import React from "react";

const fetchAddressByCep = async (cep: string) => {
    try {
        const formattedCep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (formattedCep.length !== 8) {
            throw new Error('CEP inválido');
        }
        const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`);
        const data = await response.json();
        if (data.erro) {
            throw new Error('CEP não encontrado');
        }
        return data;
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        throw error;
    }
}

export default {
    fetchAddressByCep
};
