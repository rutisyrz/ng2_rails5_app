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

  // GET /users/:id/todos
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

	// GET /users/:id/projects
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

	// API:  GET /users/:id/projects_dashboard
	// Get Project-Todos data to render on dashaboard
  public getProjectDashboardData(userId: number): Observable<any[]> { 
  	return this.http
	    .get(API_URL + '/users/' + userId.toString() + '/projects_dashboard', this.baseService.options)
	    .map(response => {	    	
	      return response.json();	      
	    })
	    .catch(this.baseService.handleError);
  }

	// GET /users/?user_type=developer
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
