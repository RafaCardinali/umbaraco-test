import React, { useState } from "react";
import styles from './ProfessionalRegister.module.css';
import { useFormRegister } from "./ProfessionalRegisterLogic";
import { formFields } from './formFieldConfig';
import { ProfessionalService } from "../../services/ProfessionalService";
import { Professional } from "../../models/professionalModels";

const ProfessionalRegister: React.FC = () => {
    const { values, handleChange } = useFormRegister();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const createdProfessional = await ProfessionalService.createProfessional(values as Professional);
        } catch (error) {
            setError('Erro ao criar novo profissional. Por favor, tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields.map(field => {
                if (field.type === 'select') {
                    return (
                        <label key={field.name} className={styles.select}>
                            <span>{field.placeholder}:</span>
                            <select className={styles.selectRow} 
                                    name={field.name} 
                                    value={(values[field.name] as string) || ''}
                                    onChange={handleChange} 
                                    required={field.required}>
                                {field.options?.map(option => 
                                    <option key={option} value={option}>{option}</option>
                                )}
                            </select>
                        </label>
                    );
                } else if (field.type === 'file') {
                    return (
                        <label key={field.name} className={styles.label}>
                            <input type="file"
                                   name={field.name}
                                   onChange={handleChange}
                                   required={field.required} />
                        </label>
                    );
                } else {
                    return (
                        <label key={field.name} className={styles.label}>
                            <input type={field.type}
                                   className={styles.row}
                                   name={field.name}
                                   placeholder={field.placeholder}
                                   value={(values[field.name] as string) || ''}
                                   onChange={handleChange}
                                   required={field.required} />
                        </label>
                    );
                }
            })}
            {error}
            <button className={styles.button} type="submit">Cadastrar</button>
        </form>
    );
};

export default ProfessionalRegister;
