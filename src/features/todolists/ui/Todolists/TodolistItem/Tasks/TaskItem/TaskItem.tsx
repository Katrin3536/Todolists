import { EditableSpan } from "@/common/components"
import { useAppDispatch } from "@/common/hooks"
import ListItem from "@mui/material/ListItem"
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import { ChangeEvent } from "react"
import { changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, Task } from "@/features/todolists/model/tasks-reducer.ts"
import { getListItemSx } from "./TaskItem.styles.ts"

type Props = {
  task: Task
  todolistId: string
}

export const TaskItem = ({ task, todolistId }: Props) => {
  const dispatch = useAppDispatch()

  const deleteTask = () => {
    dispatch(deleteTaskAC({ todolistId: todolistId, taskId: task.id }))
  }
  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTaskStatusAC({ todolistId: todolistId, taskId: task.id, isDone: e.currentTarget.checked }))
  }
  const changeTaskTitle = (title: string) => {
    dispatch(changeTaskTitleAC({ todolistId: todolistId, taskId: task.id, title: title }))
  }

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone} onChange={changeTaskStatus} />
        {/*<input type="checkbox" checked={t.isDone} onChange={changeTaskStatusHandler}/>*/}
        <EditableSpan value={task.title} onChange={changeTaskTitle} />
      </div>
      <IconButton onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}
