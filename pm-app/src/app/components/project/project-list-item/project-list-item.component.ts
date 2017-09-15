import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})

export class ProjectListItemComponent {

  @Input() project: Project;

  @Output()
  edit: EventEmitter<Project> = new EventEmitter();

  constructor() {
  }

  editProject(project: Project) {
    this.edit.emit(project);
  }

}
