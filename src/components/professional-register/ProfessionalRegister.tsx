import React, { useState} from "react";
import { FormValues } from "../../models/professionalModels";
import styles from './ProfessionalRegister.module.css';

const ProfessionalRegister: React.FC = () => {
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
      photo: null
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(values);
      };
    
      return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                <input className={styles.row} type="text" name="name" placeholder="Nome" value={values.name} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} type="text" name="vat" placeholder="CPF" value={values.vat} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="RG" type="text" name="ic" value={values.ic} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Data de Nascimento" type="date" name="birthDate" value={values.birthDate} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Email" type="email" name="email" value={values.email} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Telefone" type="text" name="phone" value={values.phone} onChange={handleChange} />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Endereço" type="text" name="address" value={values.address} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Registro Pessoal (CFM)" type="text" name="professionalRegistration" value={values.professionalRegistration} onChange={handleChange} required />
            </label>
            <label className={styles.label}>
                <input className={styles.row} placeholder="Região de Atendimento" type="text" name="careRegion" value={values.careRegion} onChange={handleChange} required />
            </label>
            <label className={styles.select}>
                    <span>Opção de atendimento:</span>
                    <select className={styles.selectRow} name="careOption" value={values.careOption} onChange={handleChange} required >
                        <option value="Presencial">Pessoalmente</option>
                        <option value="Consulta Online">Remoto</option>
                    </select>
            </label>
            <label className={styles.label}>
                Foto do perfil:
                <input type="file" name="photo" onChange={handleChange} required />
            </label>
            <div className={styles.select}>
                <button className={styles.button} type="submit">Cadastrar</button>
            </div>
        </form>
      );
    };

    export default ProfessionalRegister;
