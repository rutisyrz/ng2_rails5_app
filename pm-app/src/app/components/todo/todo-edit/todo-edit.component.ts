import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { BaseService } from '../../../services/base.service';
import { ProjectDataService } from '../../../services/project/project-data.service';
import { TodoDataService } from '../../../services/todo/todo-data.service';

import { Todo } from '../../../models/todo';
import { User } from '../../../models/user';
import { TodoStatus } from '../../../enums/todo-status.enum';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  providers: [BaseService, TodoDataService, ProjectDataService]  
})
export class TodoEditComponent implements OnInit {

	todo: Todo = new Todo;
	todoId: number;	
  options : string[];
	availableDevelopers: User[] = [];

  constructor(private baseService: BaseService,
  						private route: ActivatedRoute,
              private todoDataService: TodoDataService,
              private projectDataService: ProjectDataService,) {
  }

  ngOnInit() {

    var options = Object.keys(TodoStatus);
    this.options = options.slice(options.length / 2);

    // Access route param ID
    this.todoId = this.route.snapshot.params['id']

    // Get todo details
  	this.todoDataService
  		.getTodoById(this.todoId) 
  		.subscribe(
  			(todo) => {
  				this.todo = todo;

  				// Get all available developers to add into project
			    this.projectDataService
			      .getAssignedDevelopers(this.todo.project_id)
			      .subscribe(
			        (developers) => {
			          this.availableDevelopers = developers;
			        }) 

  			})

  }

  // Assign todo to a developer
  assignTodo(userId) {
  	this.todo.user_id = userId;
  	this.todo.status = TodoStatus["assigned"];

  	this.todoDataService.updateTodo(this.todo).subscribe(
        (updatedTodo) => {
        	this.todo = updatedTodo;          
          alert("Todo has been assigned successfully");
        }
      );
  }

  updateTodoStatus(todoStatus: string) { 

    this.todo.status = TodoStatus[todoStatus];
    this.todoDataService.updateTodo(this.todo).subscribe(
        (updatedTodo) => {
          this.todo = updatedTodo;          
          alert("Status has been changed successfully");
        }
      );
  }

}
