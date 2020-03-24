import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IProject} from '../../shared/project';
import {UserService} from 'kinvey-angular-sdk';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  form: FormGroup;
  project: IProject;

  constructor( private fb: FormBuilder, private toastr: ToastrService, private userService: UserService) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      year: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      rating: [0],
    });
  }

  ngOnInit(): void {
  }
  get activeUser() {
    return this.userService.getActiveUser();
  }
  createProject(data) {
    this.project.author = this.activeUser.username;
    this.project.rating = 0;
    this.project.description = this.form.value.description;
    this.project.imageUrl = this.form.value.imageUrl;
    this.project.title = this.form.value.title;
    this.project.year = this.form.value.year;
  }
}
