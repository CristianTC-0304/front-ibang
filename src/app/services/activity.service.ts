import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/activity.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllActivity(): Observable<any> {
    return this.httpClient.get(`${environment.connectiondb}/activities`)
  }

  getIdActivity(id: string): Observable<any> {
    return this.httpClient.get(`${environment.connectiondb}/activity/${id}`)
  }

  saveAcitivity(activity: Activity): Observable<any> {
    return this.httpClient.post(`${environment.connectiondb}/activity`, activity)
  }

  updateActivity(id: string, activity: Activity): Observable<any> {
    return this.httpClient.put(`${environment.connectiondb}/activity/${id}`, activity)
  }
}
