import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../shared/interfaces/weather-data';

@Component({
  selector: 'app-weather-info',
  imports: [],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.css'
})
export class WeatherInfo {

  @Input() weather?: WeatherData
  
}



