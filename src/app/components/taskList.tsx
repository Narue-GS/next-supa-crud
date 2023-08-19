'use client'
import { useState } from "react";
import { ITask, defaultTask } from "../types";
import { deleteTask, insertTask, selectOne, selectTasks, updateTask } from "../services";
import Task from "./task";
import TaskModal from "./taskModal";

interface TaskListProps {
  list: ITask[]
}

export default function TaskList(props:TaskListProps) {
  const [list, setList] = useState(props.list)

  const [newTask, setNewTask] = useState({
    id: list[list.length - 1]?.id + 1 || 0,
    title:""
  })

  const [selectedTask, setSelectedTask] = useState<ITask>(defaultTask)

  const insert = async (task:ITask) => {
    if(task.title) {
      insertTask(newTask)
      const add = await selectOne(newTask.id)
      setList([...list, add[0]])
      setNewTask({
        id: newTask.id + 1,
        title:""
      })
    }
  }

  const delete_ = (id:number) => {
    deleteTask(id)
    setList(list.filter(i => i.id != id))
    setSelectedTask(defaultTask)
  }

  const save = (data:ITask) => {
    updateTask(data)
    setList(list.map(i => {
      if(i.id == data.id) i = data
      return i
    }))
    setSelectedTask(defaultTask)
  }
  
  return(
    <section className="flex justify-center pt-20">
      <div className="shadow-md shadow-sky-300 rounded-lg p-3 md:min-w-[200px] sm:w-[90%] md:w-[30%] border flex flex-col gap-3">
        <header className="flex gap-3">
          <input
            className="w-full border rounded-lg p-2"
            type="text"
            placeholder={'New Task'}
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title:e.target.value})}
          />
          <button className={`p-2 border rounded-lg ${newTask.title? 'animate-waving-hand border-blue-600 ' : ''}`} onClick={async() => insert(newTask)}>add</button>
        </header>
        <ul className="divide-y border rounded-lg animate-create-task">
          {list.map((i => (
            <Task openModal={() => setSelectedTask(i)}  key={i.id} data={i}/>
          )))}
        </ul>
      </div>
      <TaskModal delete={delete_} close={() => setSelectedTask(defaultTask)} save={save} data={selectedTask}/>
    </section>
  )
}