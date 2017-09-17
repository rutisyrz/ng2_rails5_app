import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Project } from '../../models/project';
import { User } from '../../models/user';
import { BaseService } from '../base.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ProjectApiService {

  constructor(private http: Http,
  						private baseService: BaseService) { 
  }	

  // API: POST /projects
  public createProject(project: Project): Observable<Project> {
	  return this.http
	    .post(API_URL + '/projects', project, this.baseService.options)
	    .map(response => {
	      return new Project(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

  // API: GET /projects/:id
  public getProjectById(projectId: number): Observable<Project> {
	  return this.http
	    .get(API_URL + '/projects/' + projectId, this.baseService.options)
	    .map(response => {
	      return new Project(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

	// API: GET /projects/:id/developers
	public getAssignedDevelopers(projectId: number): Observable<User[]> {
		return this.http
	    .get(API_URL + '/projects/'+ projectId.toString() + '/developers', this.baseService.options)
	    .map(response => {
	      const developers = response.json();
	      return developers.map((developer) => new User(developer));
	    })
	    .catch(this.baseService.handleError);
	}

	// API: POST /projects/:id/add_developer(.:format)
	public addDeveloper(projectId: number, developerId: number): Observable<User> {
  	let data = { "project": {"id": projectId.toString(), "user_id": developerId.toString() } }
    let body = JSON.stringify(data);

	  return this.http
	    .post(API_URL + '/projects/' + projectId.toString() + '/add_developer', body, this.baseService.options)
	    .map(response => {
	      return new User(response.json());
	    })
	    .catch(this.baseService.handleError);
	}

}
