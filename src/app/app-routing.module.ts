import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AuthGuard} from './auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ProjectCalculatorComponent} from './project-calculator/project-calculator.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {AboutComponent} from './about/about.component';
import {ProjectComponent} from './project/project.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    },
  },
  {
    path: 'project-calculator',
    component: ProjectCalculatorComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'projects-portfolio',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'portfolio',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
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
