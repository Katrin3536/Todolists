import { RootState } from "src/app/store.ts"
import { Tasks } from "@/features/todolists/model/tasks-reducer.ts"

export const selectTasks = (state: RootState): Tasks => state.tasks
