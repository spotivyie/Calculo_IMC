import { useState } from "react"

import styles from './Perfil.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);    
            return evento.target.value;
        })
    }

    const resultadoSM = () => {
        const divisao = peso / (altura * altura);

        if (divisao <= 17){
            return(
                <p>Olá {nome}, seu IMC é de {divisao} está abaixo do peso</p>
            )}
            else if (divisao >= 35){
                return(
                <p>Olá {nome}, seu IMC é de {divisao} está com obesidade grau II</p>
            )}
            else if (divisao >= 30){
                return(
                <p>Olá {nome}, seu IMC é de {divisao} está com obesidade grau I</p>
            )}
            else if (divisao >= 25){
                return(
                <p>Olá {nome}, seu IMC é de {divisao} está acima do peso</p>
            )}
            else if (divisao >= 18){
                return(
                <p>Olá {nome}, seu IMC é de {divisao} está normal</p>
            )
        }
    }

    return (
        <form className={styles.list}>
            <div className={styles.listCalc}>
                <p>Calcule seu IMC</p>
            </div>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Seu peso" onChange={evento => setPeso(evento.target.value)} />
            <input type="number" placeholder="Sua altura" onChange={evento => setAltura(evento.target.value)}/>
            <div className={styles.listItem}>
                {resultadoSM()}
            </div>
        </form>
    )
}

export default Formulario