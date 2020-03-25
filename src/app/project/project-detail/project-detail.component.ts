import {Component, Input, OnInit} from '@angular/core';
import {IProject} from '../../shared/project';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from 'kinvey-angular-sdk';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  get isLogged() { return !!this.userService.getActiveUser(); }
  get isAdmin() {
    if (this.isLogged) {
      // @ts-ignore
      const admin = this.userService.getActiveUser().data.role === 'Admin';
      return true;
    }
    return false;
  }

  project: IProject;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;


  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private toastr: ToastrService) {
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
    this.projectService.rate(star, this.project._id);
    this.toastr.success(`Successfully rated project with ${star} stars!`);
  }

  async delete(id: string) {
    await this.projectService.delete(id);
    await this.router.navigate(['projects-portfolio']);
    this.toastr.success('Successfully deleted project');
  }
}
