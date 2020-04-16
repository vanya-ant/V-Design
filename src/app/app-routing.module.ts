import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectCalculatorComponent } from './project-calculator/project-calculator.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
    data: {
      isLogged: false
    },
  },
  {
    path: 'project-calculator',
    component: ProjectCalculatorComponent,
    loadChildren: () => import('./project-calculator/project-calculator.module').then(m => m.ProjectCalculatorModule),
    data: {
      isLogged: false
    }
  },
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
        data: {
          isLogged: false
        }
      }
    ],
    data: {
      isLogged: false
    }
  },
  {
    path: 'portfolio',
    component: ProjectComponent,
    data: {
      isLogged: false
    }
  },
  {
    path: 'project-create',
    component: ProjectCreateComponent,
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
