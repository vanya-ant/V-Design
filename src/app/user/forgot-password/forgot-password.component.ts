import { Component, OnInit } from '@angular/core';
import {UserService} from 'kinvey-angular-sdk';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              public toastr: ToastrService) {
    this.forgotPasswordForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  async forgotPassword() {
    try {
      await this.userService.resetPassword(this.forgotPasswordForm.value.username);
      this.toastr.success('Successfully sent reset password email!');
      this.forgotPasswordForm.reset();
      await this.router.navigate(['login']);
    } catch (error) {
      this.toastr.error('Error');
    }
  }
}
