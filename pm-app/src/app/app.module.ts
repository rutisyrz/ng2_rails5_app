import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./guards/auth.guard";
import { MaterializeModule } from 'angular2-materialize';

import { AuthApiService } from "./services/auth-api/auth-api.service";
import { BaseService } from "./services/base.service";
import { UserApiService } from "./services/user/user-api.service";
import { TodoApiService } from "./services/todo/todo-api.service";
import { ProjectApiService } from "./services/project/project-api.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthDialogComponent } from './components/auth/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project/project-list-item/project-list-item.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    TodoListComponent,
    TodoListItemComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectEditComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [ 
    Angular2TokenService, 
    AuthGuard, 
    AuthApiService,
    BaseService,
    UserApiService,
    TodoApiService,
    ProjectApiService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
