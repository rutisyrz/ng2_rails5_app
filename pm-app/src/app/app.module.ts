import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./guards/auth.guard";
import { MaterializeModule } from 'angular2-materialize';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AuthApiService } from "./services/auth/auth-api.service";
import { BaseService } from "./services/base.service";
import { UserApiService } from "./services/user/user-api.service";
import { TodoApiService } from "./services/todo/todo-api.service";
import { ProjectApiService } from "./services/project/project-api.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthDialogComponent } from './components/auth/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project/project-list-item/project-list-item.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    ProfileComponent,
    TodoListComponent,
    TodoListItemComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectEditComponent,
    TodoEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    Ng2GoogleChartsModule
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
