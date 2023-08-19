'use client'

import { useState } from "react"
import { ITask } from "../types"
import { deleteTask } from "../services"
import TaskModal from "./taskModal"

interface TaskProps {
  data:ITask,
  openModal: () => void
}

export default function Task(props:TaskProps) {
  return (
    <>
      <li onClick={() => props.openModal()} key={props.data.id} className="flex divide-x place-items-center">
          <span className="w-[15%] text-center">{props.data.id}</span>
          <span className="p-3">{props.data.title}</span>
      </li>
    </>
  )
}