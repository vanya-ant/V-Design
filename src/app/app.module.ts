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
import {HttpClientModule} from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
/*import { VerifyKinveyComponent } from './verify-kinvey/verify-kinvey.component';*/
import '@angular/compiler';
import {ProjectService} from './project/project.service';
import {DataStoreService, UserService} from 'kinvey-angular-sdk/lib';
import {ProjectCalculatorService} from './project-calculator/project-calculator.service';
import {ContactsService} from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PasswordsMatchDirective,
  /*  VerifyKinveyComponent,*/
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
        appKey: 'kid_SkcXBlwQ8',
        appSecret: '0bfab2722e3548dca29aad19cd11f4aa',
        masterSecret: '28d547fcbcf14bfbabe5d6ae4978ad4c',
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [ProjectService, UserService, DataStoreService, ProjectCalculatorService, ContactsService, KinveyModule],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
