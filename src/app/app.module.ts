import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { routing, appRouterProviders } from './app.routing';
import { RouterModule, Router } from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import * as firebase from 'firebase/app';
import { AgendaComponent } from './agenda/agenda.component';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const firebaseConfig = environment.firebaseConfig;



@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    OverviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    AuthenticationModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
 providers: [ appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
