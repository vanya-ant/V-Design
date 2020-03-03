import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
import {IProject} from '../shared/project';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  projects: IProject[] = this.projectService.projects;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {}
}
