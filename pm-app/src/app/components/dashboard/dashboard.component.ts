import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { UserDataService } from '../../services/user/user-data.service';
import { TodoStatus } from '../../enums/todo-status.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserDataService]
})
export class DashboardComponent implements OnInit {

	projects: any[];
	options : string[];

  constructor(private baseService: BaseService,
  						private userDataService: UserDataService) { }

  public ngOnInit() {

  	var options = Object.keys(TodoStatus);
    this.options = options.slice(options.length / 2);

  	this.userDataService
      .getProjectDashboardData(this.baseService.userId)
      .subscribe(
        (response) => {
          this.projects = response;
        }
      );
	}


}