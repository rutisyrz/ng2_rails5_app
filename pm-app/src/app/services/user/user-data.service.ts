import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Todo } from '../../models/todo';
import { Project } from '../../models/project';
import { UserApiService } from './user-api.service';

@Injectable()
export class UserDataService {

  constructor(private api: UserApiService) { 
  }

  // Simulate GET /users/userId/todos
  // List of Todos assigned to a signed in user
  getAssignedTodos(userId: number): Observable<Todo[]> {
    return this.api.getAssignedTodos(userId);
  }

  // Simulate GET /users/userId/todos
  // List of Projects assigned to a signed in user
  getAssignedProjects(userId: number): Observable<Todo[]> {
    return this.api.getAssignedProjects(userId);
  }

  // Simulate GET /users/:id/projects_dashboard
  // Get Project-Todos data to render on dashaboard
  getProjectDashboardData(userId: number): Observable<any[]> { 
    return this.api.getProjectDashboardData(userId);
  }

  // Simulate GET /users/?user_type=developer
  // List of Developers
  getAllDevelopers(): Observable<User[]> {
    return this.api.getAllDevelopers();
  }

}
