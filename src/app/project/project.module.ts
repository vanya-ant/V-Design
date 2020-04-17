import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProjectComponent, ProjectDetailComponent, ProjectListComponent, ProjectCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule,
  ],
  exports: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
  ]
})

export class ProjectModule { }
