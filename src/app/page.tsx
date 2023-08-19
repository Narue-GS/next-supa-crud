import TaskList from './components/taskList';
import sql from './db'
import { selectTasks } from './services';

export default async function Home() {
  const tasks = await selectTasks()

  return (
    <TaskList list={tasks}/>
  )
}
