import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities/activities.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddDateHoursComponent } from './add-date-hours/add-date-hours.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    AddDateHoursComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
