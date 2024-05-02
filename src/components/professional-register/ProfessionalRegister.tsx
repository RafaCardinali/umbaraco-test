import React from "react";
import MaskedInput from 'react-text-mask';
import styles from './ProfessionalRegister.module.css';
import { useFormRegister } from "./ProfessionalRegisterLogic";
import { formFields } from './formFieldConfig';
import { getInputMask } from './inputMasks';

const ProfessionalRegister: React.FC = () => {
    const { values, handleChange, handleSubmit } = useFormRegister();

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields.map(field => {
                let fieldValue = values[field.name];
                let inputProps = {
                    className: styles.row,
                    name: field.name,
                    placeholder: field.placeholder,
                    onChange: handleChange,
                    required: field.required,
                    value: typeof fieldValue === 'string' ? fieldValue : ''
                };

                const mask = getInputMask(field.name);
                
                if (field.type === 'select') {
                    return (
                        <label key={field.name} className={styles.select}>
                            <span>{field.placeholder}</span>
                            <select {...inputProps} className={styles.selectRow}>
                                {field.options?.map(option => 
                                    <option key={option} value={option}>{option}</option>
                                )}
                            </select>
                        </label>
                    );
                } else if (field.type === 'file') {
                    const { value, ...fileInputProps } = inputProps;
                    return (
                        <label key={field.name} className={styles.label}>
                            <input type="file" {...fileInputProps} />
                        </label>
                    );
                } else {
                    if (mask) {
                        return (
                            <label key={field.name} className={styles.label}>
                                <MaskedInput
                                    mask={mask}
                                    guide={false}
                                    {...inputProps}
                                />
                            </label>
                        );
                    } else {
                        return (
                            <label key={field.name} className={styles.label}>
                                <input type={field.type} {...inputProps} />
                            </label>
                        );
                    }
                }
            })}
            <button className={styles.button} type="submit">Cadastrar</button>
        </form>
    );
};

export default ProfessionalRegister;
