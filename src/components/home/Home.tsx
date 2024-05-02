import React from "react";
import styles from './Home.module.css'

const Home: React.FC = () => {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Bem vindo!</h2>
            <p className={styles.text}>Cadastro de Profissionais da Saúde</p>
            <a href="/professional-register" className={styles.button}>Cadastre-se Aqui!</a>
        </div>
    )
}

export default Home;