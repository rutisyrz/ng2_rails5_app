import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { AuthApiService } from "../../../services/auth-api/auth-api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService: Angular2TokenService,
              public authService: AuthApiService,
              private router: Router) {}

  ngOnInit() {
  }

}
