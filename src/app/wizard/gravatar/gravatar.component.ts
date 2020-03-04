import {Component, Input, OnInit} from '@angular/core';
import {gravAccessories, gravClothes} from '../../core/enums/gravatar-enums';
import {GravatarService} from '../../core/services/gravatar.service';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.css']
})
export class GravatarComponent implements OnInit {
  @Input() weather: any;

  public gravUrl: string;
  constructor(private gravatarService: GravatarService) { }

  ngOnInit() {
    this.buildGravatar();
    GravatarService.optionChanged.subscribe(x => {
      this.buildGravatar();
    });

  }

  buildGravatar() {
    this.gravUrl = this.gravatarService.getBaseGravatarURL();
    if (this.weather.weather[0].description.includes('clear')) {
      this.appendOption('accessories', gravAccessories.wayfarers);
      this.appendOption('accessoriesChance', '100');
    }
    if (parseFloat(this.weather.main['feels_like']) < 33) {
      this.appendOption('clothes', gravClothes.hoodie);
    }
  }

  appendOption(option: string, value: string) {
    this.gravUrl = this.gravatarService.appendOption(option, value, this.gravUrl);
  }

}
