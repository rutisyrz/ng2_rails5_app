import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from "../auth/auth-dialog/auth-dialog.component";
import { AuthApiService } from "../../services/auth-api/auth-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService:AuthApiService, private router:Router) { }

  ngOnInit(){}

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

}