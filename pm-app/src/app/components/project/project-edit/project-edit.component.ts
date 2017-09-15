import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { BaseService } from '../../../services/base.service';
import { ProjectDataService } from '../../../services/project/project-data.service';
import { UserDataService } from '../../../services/user/user-data.service';
import { TodoDataService } from '../../../services/todo/todo-data.service';

import { Project } from '../../../models/project';
import { Todo } from '../../../models/todo';
import { User } from '../../../models/user';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  providers: [BaseService, UserDataService, ProjectDataService, TodoDataService]
})
export class ProjectEditComponent implements OnInit {

  project: Project = new Project;  
  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  assignedDevelopers: User[] = [];
  availableDevelopers: User[] = [];
  projectId: number;

  constructor(private baseService: BaseService,
  						private route: ActivatedRoute,
              private projectDataService: ProjectDataService,
              private userDataService: UserDataService,
              private todoDataService: TodoDataService) {
  }

  public ngOnInit() {
      	
    // Access route param ID
    this.projectId = this.route.snapshot.params['id']

  	// Get project details
  	this.projectDataService
  		.getProjectById(this.projectId) 
  		.subscribe(
  			(project) => {
  				this.project = project;

          // Get all todos associated with a project
          this.todoDataService
            .getAllTodosByProjectId(this.project.id)
            .subscribe(
              (todos) => {
                this.todos = todos;
              })

          // Get all developers associated with a project  
          this.projectDataService
            .getAssignedDevelopers(this.project.id)
            .subscribe(
              (developers) => {
                this.assignedDevelopers = developers;
              })
  			})  	

    // Get all available developers to add into project
    this.userDataService
      .getAllDevelopers()
      .subscribe(
        (developers) => {
          this.availableDevelopers = developers;
        })  
  }

  // Add a new todo in a project
  addTodo(todo) {  	
  	todo.project_id = this.projectId;
  	todo.user_id = this.baseService.userId;

    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos.unshift(newTodo);
          alert("Todo has been created successfully");
        }
      );
  }

  // Add a developer
  addDeveloper(userId) {    
    this.projectDataService
      .addDeveloper(this.projectId, userId)
      .subscribe(
        (developer) => {
          this.assignedDevelopers.unshift(developer);
          alert("Developer has been added successfully");
        })
  }

}
