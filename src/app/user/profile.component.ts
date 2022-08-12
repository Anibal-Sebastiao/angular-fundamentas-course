import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTER_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background: #e3C3C5;}
    .error ::-wekit-input-placeholder {color: #999;}
    .error ::-moz-input-placeholder {color: #999;}
    .error :-moz-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  firstName = new FormControl(this.auth.currentUser?.firstName, [
    Validators.required,
    Validators.pattern('[aA-zZ]*')
  ])
  lastName = new FormControl(this.auth.currentUser?.lastName,  [
    Validators.required,
    Validators.pattern('[aA-zZ]*')
  ])

  constructor(private auth: AuthService,
              private router: Router,
              @Inject(TOASTER_TOKEN) private toastrService: Toastr ) {
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  ngOnInit(): void {

  }

  saveProfile(formValues: any) {

    const {firstName, lastName} = formValues;

    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(firstName, lastName);
      this.toastrService.success('Profile created');
    }

  }

  validateFirstName() {
    return this.firstName?.valid || this.firstName?.untouched
  }

  validateLastName() {
    return this.lastName?.valid || this.lastName?.untouched
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
