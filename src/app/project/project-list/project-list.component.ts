import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {

  get projects() { return this.projectService.projects; }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.loadProjects();
  }

  details() {}
}
