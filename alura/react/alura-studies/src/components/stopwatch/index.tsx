import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss"

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    /**
     * Faz a contagem regressiva do relógio
     * @param count tempo para fazer a contagem
     */
    function regressive(count: number = 0) {
        // Seta o tempo que vai decrementar o contador a cada segundo
        setTimeout(() => {
            // Verifica se o contador é maior que 0
            if (count > 0) {
                // Seta o estado do tempo para menos 1
                setTime(count - 1);
                // Chama a função novamente de forma recursiva
                return regressive(count - 1);
            } else {
                // Finalizada a tarefa
                finishTask();
            }
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <div>
                <Button onClick={() => regressive(time)}>
                    Começar
                </Button>
            </div>
        </div>
    );
}