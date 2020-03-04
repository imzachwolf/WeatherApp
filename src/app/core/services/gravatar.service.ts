import {EventEmitter, Injectable} from '@angular/core';
import {gravHairColor, gravSkin, gravTop} from '../enums/gravatar-enums';

@Injectable({
  providedIn: 'root'
})
export class GravatarService {

  constructor() { }

  static skinColor: gravSkin = gravSkin.tanned;
  static hairColor: gravHairColor = gravHairColor.platinum;
  static top: gravTop = gravTop.shortHair;
  static optionChanged = new EventEmitter();

  static emitChange() {
    GravatarService.optionChanged.emit(true);
  }

  public getBaseGravatarURL(){
    let url = `https://avatars.dicebear.com/v2/avataaars/example.svg?`;
    url = this.appendOption('skin', GravatarService.skinColor, url);
    url = this.appendOption('hairColor', GravatarService.hairColor, url);
    url = this.appendOption('top', GravatarService.top, url);
    url = this.appendOption('topChance', '100', url);
    return url;
  }

  public appendOption(option: string, value: string, gravUrl: string) {
    const percent = option.includes('Chance');
    if (percent) {
      gravUrl += `options[${option}]=${value}&`;
    } else {
      gravUrl += `options[${option}][]=${value}&`;
    }
    return gravUrl;
  }
}
