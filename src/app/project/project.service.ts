import {Injectable, InjectionToken} from '@angular/core';
import { IProject } from '../shared/project';
import { DataStoreService } from 'kinvey-angular-sdk';
import { DataStoreType } from 'kinvey-angular-sdk';
import {UserService} from 'kinvey-angular-sdk';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  projects: IProject[] = [];
  project: IProject;
  private dataStore: any;

  constructor(private dataStoreService: DataStoreService, private userService: UserService, private toastr: ToastrService) {
    this.dataStore = this.dataStoreService.collection('projects', DataStoreType.Network);
    this.getAllProjects();
  }

  getAllProjects() {
  this.dataStore.find().toPromise().then((entities) => {
    entities.forEach(en => this.projects.push(en));
  });
  }

  getProject(id: string) {
    return this.projects.find(project => project._id === id);
  }

  async create(project: IProject) {
    await this.dataStore.save(project).then(success => this.toastr.show('Successfully created project!'))
      .error(error => this.toastr.show('Error!'));
  }
}
