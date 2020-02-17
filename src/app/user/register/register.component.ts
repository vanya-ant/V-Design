import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {passwordMatch} from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      username: ['', [Validators.required, Validators.email]],
      role: ['Customer', Validators.required],
      passwords: fb.group({
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }, { validators: [passwordMatch] }),
    });
  }

  ngOnInit(): void {
  }

}
