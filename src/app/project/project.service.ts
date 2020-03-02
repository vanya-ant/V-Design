import {Injectable, InjectionToken} from '@angular/core';
import { IProject } from '../shared/project';
import { DataStoreService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  projects: IProject[];
  project: IProject;

  constructor(private dataStoreService: DataStoreService) {}

  loadProjects() {
   this.projects = this.dataStoreService.collection('projects');
  }

  getProject(id: string) {
    return this.projects.find(project => project._id === id);
  }
}
