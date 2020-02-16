import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {UserModule} from './user/user.module';
import {ProjectModule} from './project/project.module';
import {ContactsModule} from './contacts/contacts.module';
import {ProjectCalculatorModule} from './project-calculator/project-calculator.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {KinveyModule} from 'kinvey-angular-sdk';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordsMatchDirective } from './shared/passwords-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PasswordsMatchDirective,
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
    RouterModule,
    KinveyModule.init({
      imports: [KinveyModule.init({
        appKey: 'kid_Syp7vthf8',
        appSecret: 'fd05e956918441ab91a881c4475973a1'
      })]
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
