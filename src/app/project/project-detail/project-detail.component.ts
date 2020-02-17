import {Component, Input, OnInit} from '@angular/core';
import {IProject} from '../../shared/project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  get selectedProject() { return this.projectService.selectedProject; }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }
}
