'use server'

import sql from "./db";
import { ITask } from "./types";

export async function selectTasks() {
  return (await sql`SELECT * FROM tasks`).map(i => ({id:parseInt(i.id), title:i.title}))
}

export async function insertTask(task:ITask) {
  await sql`INSERT INTO tasks (title) VALUES(${task.title})`
}

export async function deleteTask(id:number) {
  await sql`DELETE FROM tasks WHERE id = ${id}`
}

export async function updateTask(task:ITask) {
  await sql`UPDATE tasks SET title = ${task.title} WHERE id = ${task.id}`
}

export async function selectOne(id:number) {
  return (await sql`SELECT * FROM tasks WHERE id = ${id}`).map(i => ({id:parseInt(i.id), title:i.title})) 
}