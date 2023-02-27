import { ITask } from '../../../types/task'
import style from './item.module.scss'

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}
export default function Item(
    {
        taskName,
        time,
        selected,
        finished,
        id,
        selectTask
    }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : '' } ${finished ? style.itemCompletado : ''}`}
            onClick={() => !finished && selectTask(
                {
                    taskName,
                    time,
                    selected,
                    finished,
                    id
                }
            )}
        >
            <h3>
                {taskName}
            </h3>
            <span>
                {time}
            </span>
            {finished && <span className={style.concluido} aria-label='itemCompletado'></span>}
        </li>
    )
}