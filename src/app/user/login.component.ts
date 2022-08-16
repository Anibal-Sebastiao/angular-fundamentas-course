import { Component, EventEmitter, Output } from "@angular/core";
import { AuthService } from "./auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() closeLoginModal = new EventEmitter<string>();

  userName: string = '';
  password: string = '';

  constructor (private auth: AuthService) {}

  login(formValues: any) {
    const {userName, password} = formValues.value;
    this.auth.loginUser(userName, password)
    this.closeLoginModal.emit('closeLoginModal')
  }
}
