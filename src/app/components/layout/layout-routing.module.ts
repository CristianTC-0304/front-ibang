import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivitiesComponent } from './activities/activities.component';
import { AddDateHoursComponent } from './add-date-hours/add-date-hours.component';

export const routes: Routes = [
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'addDateHours/:id',
    component: AddDateHoursComponent
  },
  {
    path: '',
    redirectTo: 'activities',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}