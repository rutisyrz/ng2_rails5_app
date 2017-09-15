import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BaseService } from '../../../services/base.service';
import { TodoDataService } from '../../../services/todo/todo-data.service';
import { UserDataService } from '../../../services/user/user-data.service';

import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [UserDataService, TodoDataService]
})

export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private baseService: BaseService,
              private todoDataService: TodoDataService,
              private userDataService: UserDataService) {
  }

  public ngOnInit() {

    this.userDataService
      .getAssignedTodos(this.baseService.userId)
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }  
  
}
