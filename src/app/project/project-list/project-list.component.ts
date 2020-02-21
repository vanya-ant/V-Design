import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectService} from '../project.service';
import {IProject} from '../../shared/project';
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {

  project: IProject;

  get projects() { return this.projectService.projects; }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.loadProjects();
  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
