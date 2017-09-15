import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../models/todo';
import { TodoApiService } from './todo-api.service';

@Injectable()
export class TodoDataService {

  constructor(private api: TodoApiService) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos?developer_id=ID
  getAllTodosByDeveloperId(developerId: number): Observable<Todo[]> {
    return this.api.getAllTodosByDeveloperId(developerId);
  }

  // Simulate GET /todos?project_id=ID
  getAllTodosByProjectId(projectId: number): Observable<Todo[]> {
    return this.api.getAllTodosByProjectId(projectId);
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

}