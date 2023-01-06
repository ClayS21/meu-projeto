import styles from './Form.module.css';
import { useState } from 'react';

function Form () {

    function submitForm (e) {
        e.preventDefault()
        console.log('O formulário foi enviado')
    }

    return (
        <div>
            <h1>Formulário Exemplo</h1>
            <form onSubmit={submitForm} className={styles}>
                <div>
                    <input type="text" placeholder="Digite o usuário"/>
                </div>

                <div>
                    <input type="password" placeholder="Digite a senha"/>
                </div>

                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form