import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public auth: AuthService
  ) { }

  successCallback(authResponse) {
    console.log(authResponse);
    this.auth.signIn(authResponse.user);
  }

  errorCallback(event) {
    console.log(event);
  }

}
