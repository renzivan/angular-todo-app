import { createReducer, on } from '@ngrx/store'
import { addTodo, deleteTodo } from '../actions/todo.actions'
import { TodoItem } from '../interfaces/todo-item'

export const initialState: any[] = []
let id: number = 0
let todoItem: TodoItem

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state: any, { newTodo }) => {
    todoItem = {
      id: id++,
      title: newTodo
    }
    return [...state, todoItem]
  }),
  on(deleteTodo, (state: any, { todoId }) => {
    const todos = [...state].filter(item => {
      return item.id !== todoId
    })
    return todos
  })
)

export function todoReducer(state, action) {
  return _todoReducer(state, action)
}