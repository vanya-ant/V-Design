import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';
import {ProjectListComponent} from '../project-list/project-list.component';

const routes: Routes = [
  {
    path: 'projects-portfolio',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProjectListComponent,
      },
      {
        path: ':id',
        component: ProjectDetailComponent,
        loadChildren: () => import('../project.module').then(m => m.ProjectModule),
        data: {
          isLogged: false
        }
      }
    ]
  }
];

export const ProjectRoutingModule = RouterModule.forChild(routes);



