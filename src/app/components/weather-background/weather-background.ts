import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-background.html',
  styleUrl: './weather-background.css'
})
export class WeatherBackground {

  @Input() isDay: undefined | boolean = true
  @Input() weatherDescription : undefined | string = ""

  get weatherBackground(): string {
    if(this.isDay === false){
      return 'night';
    }

    if(this.weatherDescription?.toLocaleLowerCase().includes('rain')){
      return 'rainy';
    }

    if(this.weatherDescription?.toLocaleLowerCase().includes('cloud')){
      return 'cloudy'
    }

    if(this.weatherDescription?.toLocaleLowerCase().includes('sun') || this.weatherDescription?.toLocaleLowerCase().includes('clear')){
      return 'sunny'
    }

    return 'default-day'
  }


}
