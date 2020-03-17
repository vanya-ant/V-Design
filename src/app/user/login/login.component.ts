import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              public toastr: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  ngOnInit() {
    if (this.activeUser) {
      this.logout();
    }
  }

  async login() {
    try {
      await this.userService.login(this.loginForm.value.username, this.loginForm.value.password);
      await this.router.navigate(['projects-portfolio']);
      this.toastr.success('Successfully logged in');
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
