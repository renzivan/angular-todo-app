import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo Component] AddTodo', props<{ newTodo: string }>())
export const deleteTodo = createAction('[Todo Component] DeleteTodo', props<{ todoId: number }>())