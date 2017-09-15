import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthApiService } from "../../../services/auth-api/auth-api.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  
  constructor(public authApiService:AuthApiService) {}

  ngOnInit() {}

  onSignInSubmit(){

    this.authApiService.logInUser(this.signInUser).subscribe(
      res => {
        if(res.status == 200){
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    );
  }

}