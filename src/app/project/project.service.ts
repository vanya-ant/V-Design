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

  constructor(private dataStoreService: DataStoreService, private userService: UserService) {
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
    await this.dataStore.save(project);
    this.projects = [];
    this.getAllProjects();
  }

  async delete(id: string) {
    const project = this.projects.find(p => p._id === id);
    if (project) {
      await this.dataStore.removeById(id);
    }
    this.projects = [];
    this.getAllProjects();
  }
}
