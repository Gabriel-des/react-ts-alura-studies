import React, { useState } from 'react';
import Forms from '../components/forms';
import List from '../components/lista';
import style from './app.module.scss';
import Stopwatch from '../components/stopwatch';
import { ITask } from '../types/task';

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();


  /**
   * Seta a tarefa clicada para selecionada
   * @param selectedTask tarefa selecionada
   * @returns void
  */
  function selectTask(selectedTask: ITask): void {
    // Seta a task selecionada
    setSelected(selectedTask);
    // Percorre por todas as tasks
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,

      // Muda o selected da task selecionada
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  /**
   * Seta a tarefa finalizada
   * @returns void
  */
  function finishTask(): void {
    // Verifica se há alguma tarefa selecionada
    if (selected) {
      // Seta o selecionado para undefined pois não terá nenhum item selecionado mais
      setSelected(undefined);
      // Faz uma iteração por todas as tarefas
      setTasks(oldTasks => oldTasks.map(task => {
        // Verifica se a tarefa da iteração é a mesma que a selecionada
        if (task.id === selected.id) {
          // Retorna a task alterando as propriedades selected e finished
          return {
            ...task,
            selected: false,
            finished: true
          }
        }

        // Retorna a tarefa sem mudanças
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
