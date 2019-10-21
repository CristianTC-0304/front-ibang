import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor } from '../app/helpers/jwt.interceptor';

import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbDatepickerModule,
  NbAlertModule,
  NbToastrModule
} from '@nebular/theme';


import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { ActivitiesComponent } from './components/layout/activities/activities.component';;
import { LayoutRoutingModule } from './components/layout/layout-routing.module';
import { AddDateHoursComponent } from './components/layout/add-date-hours/add-date-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    AddDateHoursComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbTreeGridModule,
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',

          alwaysFail: true,
          delay: 1000,
        }),
      ],
    }),
    LayoutRoutingModule,
    NbAlertModule,
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
