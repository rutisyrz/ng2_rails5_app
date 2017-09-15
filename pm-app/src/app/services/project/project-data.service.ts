import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';
import { User } from '../../models/user';
import { ProjectApiService } from './project-api.service';


@Injectable()
export class ProjectDataService {

  constructor(private api: ProjectApiService) {
  }

  // Simulate POST /projects
  addProject(project: Project): Observable<Project> {
    return this.api.createProject(project);
  }

  // Simulate GET /projects/:id
  getProjectById(projectId: number): Observable<Project> {
    return this.api.getProjectById(projectId);
  }

  // Simulate GET /projects/:id/developers
  getAssignedDevelopers(projectId: number): Observable<User[]> {
    return this.api.getAssignedDevelopers(projectId);
  }

  // Simulate POST /projects/:id/add_developer(.:format)
  public addDeveloper(projectId: number, developerId: number): Observable<User> {
    return this.api.addDeveloper(projectId, developerId);
  }






  // Simulate PUT /projects/:id
  updateProject(project: Project): Observable<Project> {
    return this.api.updateProject(project);
  }

  // Simulate GET /projects
  getAllProjects(): Observable<Project[]> {
    return this.api.getAllProjects();
  }

  // Simulate GET /projects?manager_id=ID
  getAllProjectsByManagerId(managerId: number): Observable<Project[]> {
    return this.api.getAllProjectsByManagerId(managerId);
  }

}
