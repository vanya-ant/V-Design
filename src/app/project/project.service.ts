import {Injectable, InjectionToken} from '@angular/core';
import { IProject } from '../shared/project';
import { DataStoreService } from 'kinvey-angular-sdk';
import { DataStoreType } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  projects: IProject[] = [];
  project: IProject;
  private dataStore: any;

  constructor(private dataStoreService: DataStoreService) {
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
}
