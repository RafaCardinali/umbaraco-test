import React, { useState } from "react";
import styles from './ProfessionalRegister.module.css';
import { useFormRegister } from "./ProfessionalRegisterLogic";
import { formFields } from './formFieldConfig';

const ProfessionalRegister: React.FC = () => {
    const { values, handleChange, handleSubmit } = useFormRegister();

    return (
        <form onSubmit={handleSubmit(values)} className={styles.form} >
            {formFields.map(field => {
                if (field.type === 'select') {
                    return (
                        <label key={field.name} className={styles.select}>
                            <span>{field.placeholder}</span>
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
            <button className={styles.button} type="submit">Cadastrar</button>
        </form>
    );
};

export default ProfessionalRegister;
