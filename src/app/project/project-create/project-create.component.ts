import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProject} from '../../shared/project';
import { ProjectService } from '../../shared/services/project.service';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  form: FormGroup;
  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  public pictures = [];

  constructor( private fb: FormBuilder,
               private projectService: ProjectService,
               private userService: UserService,
               private router: Router,
               private toastr: ToastrService) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      year: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      rating: [0],
      file: ['']
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

    const createdProject = await this.projectService.create(project);
    const uploadedFile = await this.projectService.uploadFile(this.pictures[0], createdProject._id);

    await this.router.navigate(['projects-portfolio']);
    this.toastr.success('Successfully created project');
  }

  onUploadFinished(event) {
    this.pictures.push(event.file);
  }
}
