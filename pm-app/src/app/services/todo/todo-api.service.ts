import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from '../../models/todo';
import { BaseService } from '../base.service';

const API_URL = environment.apiUrl;

@Injectable()
export class TodoApiService {

  constructor(private http: Http,
  						private baseService: BaseService) { 
  }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
  	return this.getAllTodosHelper(API_URL + '/todos');
  }

  // API: GET /todos?developer_id=ID
  public getAllTodosByDeveloperId(developer_id: number): Observable<Todo[]> {
  	return this.getAllTodosHelper(API_URL + '/todos?developer_id=' + developer_id.toString());
  }

  // API: GET /todos?project_id=ID
  public getAllTodosByProjectId(project_id: number): Observable<Todo[]> {
  	return this.getAllTodosHelper(API_URL + '/todos?project_id=' + project_id.toString());
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
	  return this.http
	    .post(API_URL + '/todos', todo, this.baseService.options)
	    .map(response => {
	      return new Todo(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
	  return this.http
	    .get(API_URL + '/todos/' + todoId, this.baseService.options)
	    .map(response => {
	      return new Todo(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
	  return this.http
	    .put(API_URL + '/todos/' + todo.id, todo, this.baseService.options)
	    .map(response => {
	      return new Todo(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

	//  PRIVATE methods
	private getAllTodosHelper(url: string): Observable<Todo[]> {
	  return this.http
	    .get(url, this.baseService.options)
	    .map(response => {
	      const todos = response.json();
	      return todos.map((todo) => new Todo(todo));
	    })
	    .catch(this.baseService.handleError);
	}  

}
