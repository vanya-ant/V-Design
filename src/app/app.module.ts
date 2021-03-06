import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { KinveyModule } from 'kinvey-angular-sdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordsMatchDirective } from './shared/passwords-match.directive';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import '@angular/compiler';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PasswordsMatchDirective,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
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
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
