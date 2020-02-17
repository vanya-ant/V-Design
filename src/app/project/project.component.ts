import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
import {IProject} from '../shared/project';
import {truncate} from 'fs';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  get projects() { return this.projectService.projects; }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.loadProjects();
  }

  selectProjectHandler(id: string) {
    this.projectService.selectProject(id);
  }
}
