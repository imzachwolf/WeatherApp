import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  static locationInfo: any;

  constructor(private http: HttpClient) {

  }

  public getIp() {
    return this.http.get('https://api.ipify.org/?format=json');
  }

  public getZip(ip: string) {
    // hard coded to my backend as a service
    return this.http.get(`https://us-central1-weather-page-b85fd.cloudfunctions.net/getFiveDayForecastByZip?ip=${ip}`);

  }
}
