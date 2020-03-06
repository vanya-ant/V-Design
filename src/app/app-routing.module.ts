import {NgModule} from '@angular/core';
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
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      isLogged: false
    },
  },
  {
    path: 'project-calculator',
    component: ProjectCalculatorComponent,
    data: {
      isLogged: false
    }
  },
  {
    path: 'projects-portfolio',
    component: ProjectListComponent,
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
    path: 'about',
    component: AboutComponent,
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
