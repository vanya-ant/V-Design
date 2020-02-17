import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [ ProjectComponent, ProjectDetailComponent, ProjectListComponent ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
  ]
})

export class ProjectModule { }
