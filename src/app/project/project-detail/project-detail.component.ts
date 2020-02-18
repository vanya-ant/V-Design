import {Component, Input, OnInit} from '@angular/core';
import {IProject} from '../../shared/project';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: IProject;

  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.project = this.activatedRoute.snapshot.data.project;
  }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      const id = params._id;
      this.project = this.projectService.getProject(id);
    });
  }
}
