import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {UserModule} from './user/user.module';
import {ProjectModule} from './project/project.module';
import {ContactsModule} from './contacts/contacts.module';
import {ProjectCalculatorModule} from './project-calculator/project-calculator.module';
import {CoreModule} from './core/core.module';
import {NavigationCancel, RouterModule} from '@angular/router';
import {NavigationComponent} from './core/navigation/navigation.component';
import {FooterComponent} from './core/footer/footer.component';
import {ProjectComponent} from './project/project.component';
import {ProjectCalculatorComponent} from './project-calculator/project-calculator.component';
import {UserComponent} from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    ProjectModule,
    ContactsModule,
    ProjectCalculatorModule,
    CoreModule,
    ContactsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
