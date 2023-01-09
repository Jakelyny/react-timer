import React from "react";
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    } ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>''
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        tarefa={item.tarefa}
                        tempo={item.tempo}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;