import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import {ProjectRoutingModule} from './project-routing/project-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ ProjectComponent, ProjectDetailComponent, ProjectListComponent, ProjectCreateComponent ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
  ]
})

export class ProjectModule { }
