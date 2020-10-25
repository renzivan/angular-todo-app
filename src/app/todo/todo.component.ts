import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addTodo, deleteTodo } from '../actions/todo.actions'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  todos$: Observable<any>

  deletedTodoId: number

  constructor(private store: Store<{ todos: any }>) {
    this.todos$ = store.select('todos')
  }

  addTodo(inputValue: string, e) {
    this.store.dispatch(addTodo({ newTodo: inputValue }))
    e.preventDefault()
  }

  deleteTodo(id: number) {
    this.deletedTodoId = id
    setTimeout(() => {
      this.store.dispatch(deleteTodo({ todoId: id }))
    }, 500)
  }
}