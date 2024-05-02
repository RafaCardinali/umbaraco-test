import React, { useState } from "react";
import { FormValues } from "../../models/professionalModels";
import { ProfessionalService } from "../../services/ProfessionalService";
import { Professional } from "../../models/professionalModels";

export const useFormRegister = () => {
    const [values, setValues] = useState<FormValues>({
        name: '',
        vat: '',
        ic: '',
        birthDate: '',
        email: '',
        phone: '',
        address: '',
        professionalRegistration: '',
        careRegion: '',
        careOption: '',
        photo: null,
        consultationValue: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'photo' && e.target instanceof HTMLInputElement) {
            const files = e.target.files;
            setValues({
                ...values,
                [name]: files ? files[0] : null,
            });
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    };

    const handleSubmit = (values: FormValues) => async (e: React.FormEvent) => {
        e.preventDefault();
    
        const { email, phone } = values;

        if (!email.trim() && !phone.trim()) {
            alert("Por favor, insira pelo menos um email ou um telefone.");
            return;
        }
    
        try {
            await ProfessionalService.createProfessional(values as Professional);
            alert("Cadastro realizado!");
        } catch (error) {
            alert("Erro ao criar novo cadastro. Tente novamente");
        }
    };

    return { values, setValues, handleChange, handleSubmit };
};

