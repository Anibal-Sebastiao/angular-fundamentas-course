import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';

const USER_ROUTES: Routes = [
  {
    path: '', redirectTo: '/user/profile', pathMatch: 'full',
  },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/login', component: LoginComponent }
]


@NgModule({
  imports: [
   RouterModule.forChild(USER_ROUTES),
  ]
})
export class UserRouting {}
