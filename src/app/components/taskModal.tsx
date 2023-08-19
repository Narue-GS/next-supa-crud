'use client'

import { useEffect, useState } from "react"
import { ITask, defaultTask } from "../types"
import { updateTask } from "../services"

interface TaskModalProps{
  data:ITask,
  save: (data:ITask) => void,
  close: () => void,
  delete: (id:number) => void
}

export default function TaskModal(props:TaskModalProps) {
  const [updatedTask, setUpdatedTask] = useState(defaultTask)
  if(props.data.id == -1) return null

  const saveTask = () => {
    try {
      if(updatedTask.id != -1) {
        if(updatedTask.title){
          props.save(updatedTask)
        } else throw new Error('fail to edit, invalid values')
      } else throw new Error('fail to edit, invalid values')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section  onClick={() => props.close()} className="bg-[rgb(0,0,0,0.5)] absolute w-screen h-screen top-0"></section>
      <div className=" absolute min-w-[200px] h-fit bg-white rounded p-3 animate-open-modal">
        <input onChange={(e) => setUpdatedTask({...props.data, title:e.target.value})} className="border rounded w-full p-2" type="text" defaultValue={props.data.title}/>
        <footer className="flex gap-5">
          <button className="w-full p-2 mt-3 bg-blue-500 hover:bg-blue-700 transition rounded" onClick={() => saveTask()}>Save</button>
          <button className="w-full p-2 mt-3 bg-red-200 hover:bg-red-600 hover:text-white transition rounded" onClick={() => props.delete(props.data.id)}>Delete</button>
        </footer>
      </div>
    </>
  )
}