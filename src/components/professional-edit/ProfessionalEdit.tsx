import React from "react";
import MaskedInput from 'react-text-mask';
import styles from '../professional-register/ProfessionalRegister.module.css';
import { formFields } from "../professional-register/formFieldConfig";
import { getInputMask } from "../professional-register/inputMasks";
import { ProfessionalEditLogic } from "./ProfessionalEditLogic";
import { ProfessionalEditProps } from "../../models/ProfessionalEditProps";

const ProfessionalEdit: React.FC<ProfessionalEditProps> = ({ professionalId }) => {
    const { values, handleChange, handleSubmit } = ProfessionalEditLogic(professionalId);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields.map(field => {
                const inputProps = {
                    className: styles.row,
                    name: field.name,
                    placeholder: field.placeholder,
                    onChange: handleChange,
                    required: field.required,
                };

                const valueProps = field.type === 'file' ? {} : { value: values[field.name]?.toString() ?? '' };
                const mask = field.name !== 'vat' ? getInputMask(field.name) : undefined;
                
                if (field.type === 'select') {
                    return (
                        <label key={field.name} className={styles.select}>
                            <span>{field.placeholder}</span>
                            <select {...inputProps} {...valueProps} onChange={handleChange as unknown as React.ChangeEventHandler<HTMLSelectElement>} className={styles.selectRow}>
                                {field.options?.map(option => 
                                    <option key={option} value={option}>{option}</option>
                                )}
                            </select>
                        </label>
                    );
                } else if (field.type === 'file') {
                    return (
                        <label key={field.name} className={styles.label}>
                            <input type="file" {...inputProps} />
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
                                    {...valueProps}
                                />
                            </label>
                        );
                    } else {
                        return (
                            <label key={field.name} className={styles.label}>
                                <input type={field.type} {...inputProps} {...valueProps} />
                            </label>
                        );
                    }
                }
            })}
            <button className={styles.button} type="submit">Editar</button>
        </form>
    );
};

export default ProfessionalEdit;
