import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user';
import { Todo } from '../../models/todo';
import { Project } from '../../models/project';
import { BaseService } from '../base.service';

const API_URL = environment.apiUrl;

@Injectable()
export class UserApiService {

  constructor(private http: Http,
  						private baseService: BaseService) { 
  }

  // GET /users/userId/todos
  // List of Todos assigned to a signed in user
  public getAssignedTodos(userId: number): Observable<Todo[]> {
	  return this.http
	    .get(API_URL + '/users/' + userId.toString() + '/todos', this.baseService.options)
	    .map(response => {
	      const todos = response.json();
	      return todos.map((todo) => new Todo(todo));
	    })
	    .catch(this.baseService.handleError);
	}  

	// GET /users/userId/projects
  // List of Projects assigned to a signed in user
  public getAssignedProjects(userId: number): Observable<Project[]> {
	  return this.http
	    .get(API_URL + '/users/' + userId.toString() + '/projects', this.baseService.options)
	    .map(response => {
	      const projects = response.json();
	      return projects.map((project) => new Project(project));
	    })
	    .catch(this.baseService.handleError);
	}  

	// List of Developers
	public getAllDevelopers(): Observable<User[]> {
		return this.http
	    .get(API_URL + '/users/?user_type=developer', this.baseService.options)
	    .map(response => {
	      const developers = response.json();
	      return developers.map((developer) => new User(developer));
	    })
	    .catch(this.baseService.handleError);
	}

}
