import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";

import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/users/profile/profile.component";

import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';

import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';

const routes: Routes = [
	{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todos/:id/edit',
    component: TodoEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id/edit',
    component: ProjectEditComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
