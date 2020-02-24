import { Injectable } from '@angular/core';
import { IProject } from '../shared/project';
import {DataStoreService, DataStoreType} from 'kinvey-angular-sdk/lib';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  projects: IProject[];
  project: IProject;

  constructor(private dataStoreService: DataStoreService) {}

  loadProjects() {
   this.projects = this.dataStoreService.collection('projects', DataStoreType.Auto);
  }

  getProject(id: string) {
    return this.projects.find(project => project._id === id);
  }
}
