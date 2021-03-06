import {Component, OnInit} from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { passwordMatch } from '../../shared/validators';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              public toastr: ToastrService) {
    this.registerForm = fb.group({
      username: ['', [Validators.required, Validators.email]],
      role: ['Customer', Validators.required],
      passwords: fb.group({
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }, { validators: [passwordMatch] }),
    });
  }

  ngOnInit() {
    if (this.activeUser) {
      this.logout();
    }
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  async register() {
    const registerObj = this.registerForm.value;
    registerObj.password = registerObj.passwords.password;
    delete registerObj.passwords;
    try {
        await this.userService.signup(registerObj);
        await this.router.navigate(['projects-portfolio']);
        this.toastr.success('Successfully registered');
    } catch (error) {
      this.toastr.error('Error');
    }
  }

  async logout() {
    try {
      await this.userService.logout();
      localStorage.clear();
      this.toastr.success('Successfully logged out');
    } catch (error) {
      this.toastr.error('Error');
    }
  }
}
