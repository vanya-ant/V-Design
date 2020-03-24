import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IProject} from '../../shared/project';
import {ProjectService} from '../project.service';
import {UserService} from 'kinvey-angular-sdk';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder, private projectService: ProjectService, private userService: UserService) {
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

  async createProject(project: IProject) {
    project.author = this.activeUser.username;
    project.title = this.form.value.title;
    project.year = this.form.value.year;
    project.description = this.form.value.description;
    project.imageUrl = this.form.value.imageUrl;
    project.rating = 0;

    await this.projectService.create(project);
  }
}
