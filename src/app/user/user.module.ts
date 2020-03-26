import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class UserModule { }
