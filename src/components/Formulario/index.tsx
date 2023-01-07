import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor={style.novaTarefa}>
                        Adicione uma tarefa
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="Qual será a tarefa?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1"
                        name="tempo" 
                        id="tempo" 
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;