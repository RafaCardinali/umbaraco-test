import { useState } from "react";
import { FormValues } from "../../models/professionalModels";

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

    return { values, setValues, handleChange };
};

export const handleSubmit = (values: FormValues) => (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
};