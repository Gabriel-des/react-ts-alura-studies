import React, { SetStateAction, useState } from 'react';
import Button from '../button';
import style from './forms.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<SetStateAction<ITask[]>>;
}

function Forms({ setTasks }: Props) {

    const [taskName, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    taskName,
                    time,
                    selected: false,
                    finished: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione um novo estudo</label>
                <input
                    type="text"
                    name='tarefa'
                    id='tarefa'
                    value={taskName}
                    onChange={event => setTask(event.target.value)}
                    placeholder='O que você quer estudar'
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Tempo</label>
                <input
                    type="time"
                    step="1"
                    name='tempo'
                    id='tempo'
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    min='00:00:00'
                    max='01:30:00'
                    placeholder='O que você quer estudar'
                    required />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    );
}

export default Forms;