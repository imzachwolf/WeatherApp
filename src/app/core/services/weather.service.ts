import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationService} from './location.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static weather: Array<any>;
  static weatherLoaded: EventEmitter<any> = new EventEmitter<any>();


  constructor(private http: HttpClient, private locationService: LocationService) {

  }

  getWeather() {
    this.locationService.getIp().subscribe(resp => {
      const ip = resp['ip'];
      this.locationService.getZip(ip).subscribe((d: any) => {
        console.log(d);
        LocationService.locationInfo = d;
        this.http.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=${LocationService.locationInfo.zip}&appid=ad4276a6890ac01f42419c15d7a8b265`).subscribe((x:any) => {
          console.log(x);
          let cur = '';
          WeatherService.weather = x.list.filter((w: any) => {
            const hour = w['dt_txt'].split(' ')[1].split(':')[0];
            if (cur === '' || cur === hour) {
              cur = hour;
              return true;
            }
            return false;
          });
          WeatherService.weatherLoaded.emit(true);
        });
      });
    });
  }



}
