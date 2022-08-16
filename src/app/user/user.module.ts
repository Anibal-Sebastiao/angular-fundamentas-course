import { LoginComponent } from './login.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule
  ],

  exports: [
    LoginComponent
  ]
})
export class UserModule {}
