import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output()
  edit: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  editTodo(todo: Todo) {
    this.edit.emit(todo);
  }

}
