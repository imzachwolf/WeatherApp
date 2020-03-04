import { Component, OnInit } from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
import {Observable} from 'rxjs';
import {LocationService} from '../core/services/location.service';
import {HttpClient} from '@angular/common/http';
import {WeatherService} from '../core/services/weather.service';
import {gravHairColor, gravSkin, gravTop} from '../core/enums/gravatar-enums';
import {GravatarService} from '../core/services/gravatar.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  // private getFiveDayForecast: (data: any) => Observable<any>;

  private zip: string;
  private locationInfo: any;
  public weatherInfo: Array<any>;
  WeatherService: any;
  skinOptions: any;
  selectedSkin: gravSkin;
  selectedHairColor: gravHairColor;
  hairColorOptions: any;
  topOptions: any;
  selectedTop: gravTop;



  constructor(private weatherService: WeatherService) {


    // this.getFiveDayForecast = this.fns('getFiveDayForecast');

  }

  ngOnInit() {
    this.weatherService.getWeather();
    this.selectedSkin = GravatarService.skinColor;
    WeatherService.weatherLoaded.subscribe(x => {
      this.weatherInfo = WeatherService.weather;
    });

    this.skinOptions = Object.keys(gravSkin);
    this.hairColorOptions = Object.keys(gravHairColor);
    this.topOptions = Object.keys(gravTop);
  }

  changeSkin($event: any) {
    GravatarService.skinColor = $event;
    GravatarService.emitChange();
  }

  changeHairColor($event: any) {
    GravatarService.hairColor = $event;
    GravatarService.emitChange();
  }

  changeTop($event: any) {
    GravatarService.top = $event;
    GravatarService.emitChange();
  }
}
