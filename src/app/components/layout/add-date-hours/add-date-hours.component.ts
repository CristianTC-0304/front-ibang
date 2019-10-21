import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../../services/activity.service';
import { DatePipe } from '@angular/common';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add-date-hours',
  templateUrl: './add-date-hours.component.html',
  styleUrls: ['./add-date-hours.component.css']
})
export class AddDateHoursComponent implements OnInit {
  private index: number = 0;
  allColumns = ['Fecha', 'Hora'];
  activity: any = {};
  activityId = '';
  data = [];
  hours = [];
  date = [];
  result = [];

  constructor(
    private activityService: ActivityService,
    private datePipe: DatePipe,
    private toastrService: NbToastrService,
    activateRoute: ActivatedRoute
  ) {
    this.activityId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.activityService.getIdActivity(this.activityId).subscribe(result => {
      console.log('result activity', result);
      let count = 0
      this.data = new Array
      this.hours = new Array
      this.date = new Array
      this.result = result
      result.data.hours.map(hour => {
        this.hours.push(parseInt(hour))
        this.date.push(result.data.date[count])
        this.data.push({ data: { date: this.transformDate(result.data.date[count]), hour: hour } })
        ++count;
      })
    }, error => {
      console.log('error activity')
    })
  }

  addAcitivity() {
    if (this.data.length > 0) {
      const hour = parseInt(this.activity.hours)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;

      let sumHours = this.hours.reduce(reducer, hour)
      if (sumHours <= 8) {

        this.hours.push(hour)
        this.date.push(this.activity.date)

        const data = {
          hours: this.hours,
          date: this.date
        }

        this.updateDateHourActivity(data);

      } else {
        this.activity = {}
        const status = 'danger'
        const destroy = true
        this.toastrService.show('Esta actividad ya tiene 8 horas', 'Error', { status, destroyByClick: destroy })
      }
    } else {

    }
  }

  updateDateHourActivity(activity) {
    this.activityService.updateActivity(this.activityId, activity).subscribe(result => {
      this.getData()
      this.activity = {}
    }, error => {
      console.log('error save activity', error)
    })
  }


  transformDate(date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }


}
