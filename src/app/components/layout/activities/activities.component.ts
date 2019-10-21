import { Component, OnInit } from '@angular/core';
import { NbGetters, NbTreeGridPresentationNode, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Activity } from '../../../models/activity.model';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  allColumns = ['Actividad', 'Acciones'];
  source: NbTreeGridDataSource<any>
  data = [];
  activity: any = {};
  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.activityService.getAllActivity().subscribe(result => {
      this.data = new Array;
      result.data.map(res => {
        this.data.push({ data: res })
      })
    }, error => {
      console.log('error activity', error)
    })
  }

  addAcitivity() {
    this.data.push({ data: this.activity.name })
    this.activityService.saveAcitivity(this.activity).subscribe(result => {
      if (result.data) {
        this.activity = {};
        this.getData();
      }
    }, error => {
      console.log('result error', error)
    })
  }

}
