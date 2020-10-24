import { createReducer, on } from '@ngrx/store'
import { addTodo, deleteTodo } from '../actions/todo.actions'

export const initialState: any[] = []
let id: number = 0

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state: any, { newTodo }) => {
    return [
      ...state,
      {
        id: id++,
        title: newTodo
      }
    ]
  }),
  on(deleteTodo, (state: any, { todoId }) => {
    let todos = [...state].filter(item => {
      return item.id !== todoId
    })
    return todos
  })
)

export function todoReducer(state, action) {
  return _todoReducer(state, action)
}