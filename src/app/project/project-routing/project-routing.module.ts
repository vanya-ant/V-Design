
import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';
import {ProjectCreateComponent} from '../project-create/project-create.component';
import {AuthGuard} from '../../auth.guard';
import {ProjectListComponent} from '../project-list/project-list.component';

const routes: Routes = [
  {
    path: 'project',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProjectListComponent,
      },
      {
        path: 'create',
        component: ProjectCreateComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: false
        }
      },
      {
        path: 'detail/:id',
        component: ProjectDetailComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: false
        }
      }
    ]
  }
];

export const ProjectRoutingModule = RouterModule.forChild(routes);



