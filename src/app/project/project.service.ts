import { Injectable } from '@angular/core';
import { IProject } from '../shared/project';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: IProject[];
  project: IProject;

  constructor(private http: HttpClient) {}

  loadProjects() {
    this.http.get<IProject[]>('http://localhost:3000/projects').subscribe(projects => {
      this.projects = projects;
    });
  }
}
