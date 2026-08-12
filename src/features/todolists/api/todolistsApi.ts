import { instance } from "@/common/instance"
import type { BaseResponse } from "@/common/types"
import type { TodolistServer } from "@/features/todolists/api/todolistsApi.types"

export const todolistsApi = {
  getTodolists() {
    return instance.get<TodolistServer[]>("/todo-lists")
  },
  changeTodolistTitle(payload: { id: string; title: string }) {
    const { title, id } = payload
    return instance.put<BaseResponse>(`/todo-lists/${id}`, { title })
  },
  createTodolist(title: string) {
    return instance.post<BaseResponse<{ item: TodolistServer }>>("/todo-lists", { title })
  },
  deleteTodolist(id: string) {
    return instance.delete<BaseResponse>(`/todo-lists/${id}`)
  },
}
