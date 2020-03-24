import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';
import {ProjectCreateComponent} from '../project-create/project-create.component';
import {AuthGuard} from '../../auth.guard';
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
        path: 'project-create',
        component: ProjectCreateComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },
      {
        path: ':id',
        component: ProjectDetailComponent,
        data: {
          isLogged: false
        }
      }
    ]
  }
];

export const ProjectRoutingModule = RouterModule.forChild(routes);



