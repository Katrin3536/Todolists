import { useAppSelector } from "@/common/hooks"
import { getFilteredTasks } from "@/common/utils"
import { selectTasks } from "@/features/todolists/model/tasks-selectors.ts"
import { TodolistType } from "@/features/todolists/model/todolists-reducer.ts"
import List from "@mui/material/List"
import { TaskItem } from "./TaskItem/TaskItem.tsx"

type Props = {
  todolist: TodolistType
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist

  const tasks = useAppSelector(selectTasks)

  const filteredTasks = getFilteredTasks(tasks[id], filter)

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p>" No tasks"</p>
      ) : (
        <List>
          {filteredTasks.map((task) => {
            return <TaskItem key={task.id} task={task} todolistId={id} />
          })}
        </List>
      )}
    </>
  )
}
