import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthApiService } from "../../../services/auth-api/auth-api.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authApiService:AuthApiService) {}

  ngOnInit() {}


  onSignUpSubmit(){

    this.authApiService.registerUser(this.signUpUser).subscribe(
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