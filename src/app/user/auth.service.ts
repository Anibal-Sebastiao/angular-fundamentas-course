import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "./user.model";


@Injectable()
export class AuthService {

  currentUser: IUser | any;

  constructor (private router: Router) {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'hannibal',
      firstName: 'Hannibal',
      lastName: 'Ha'
    }

    this.router.navigate(['/events'])

  }

  isAuthenticated() {
    return (this.currentUser) ? true : false;
  }

  updateCurrentUser(fistName: string, lastName: string) {
    this.currentUser = {
      ...this.currentUser,
      fistName,
      lastName
    }
  }

  cancel () {
    this.router.navigate(['/events'])
  }
}
