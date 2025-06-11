import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from '../../../shared/interfaces/weather-data';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-weather-info',
  imports: [NgIcon],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.css'
})
export class WeatherInfo {

  @Input() weather?: WeatherData

  @Output() back = new EventEmitter<void>();

  onBackClick(){
   this.back.emit();
  }
  
  
}



