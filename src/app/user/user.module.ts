import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';

const USER_ROUTES: Routes = [
  {path: '', component: ProfileComponent}
]


@NgModule({
  declarations: [

  ],
  imports: [
   CommonModule,
   RouterModule.forChild(USER_ROUTES)

  ]
})
export class UserModule {}
