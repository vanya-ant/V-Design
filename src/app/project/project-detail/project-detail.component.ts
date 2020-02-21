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
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;


  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.project = this.activatedRoute.snapshot.data.project;
  }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      this.project = this.projectService.getProject(params.id);
    });
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
