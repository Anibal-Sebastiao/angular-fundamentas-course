import { Component } from "@angular/core";
import { AuthService } from "./auth.service";


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor (private auth: AuthService) {}

  login(formValues: any) {
    const {userName, password} = formValues.value;
    this.auth.loginUser(userName, password)
  }
}
