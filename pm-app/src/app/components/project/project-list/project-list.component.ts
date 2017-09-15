import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BaseService } from '../../../services/base.service';
import { ProjectDataService } from '../../../services/project/project-data.service';
import { UserDataService } from '../../../services/user/user-data.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [UserDataService, ProjectDataService]
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = []; 
  newProject: Project= new Project();

  constructor(private router: Router,
              private baseService: BaseService,
              private projectDataService: ProjectDataService,
              private userDataService: UserDataService) {
  }

  public ngOnInit() {

    this.userDataService
      .getAssignedProjects(this.baseService.userId)
      .subscribe(
        (projects) => {
          this.projects = projects;
        }
      );
  }  

  addProject(project) {
    project.user_id = this.baseService.userId;

    this.projectDataService      
      .addProject(project)
      .subscribe(
        (newProject) => {
          this.projects.unshift(newProject);
          alert("Project has been created successfully");
        }
      );
  }

}
