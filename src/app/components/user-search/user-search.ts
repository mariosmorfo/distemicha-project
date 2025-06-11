import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../../shared/interfaces/weather-data';
import { WeatherInfo } from '../weather-info/weather-info';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule, WeatherInfo, CommonModule],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css'
})
export class UserSearch {

weather: WeatherService = inject(WeatherService);

showWeather = false;
weatherData?: WeatherData;


  cityName: string= "";

  onSearch():void{
   this.weather.getWeather(this.cityName).subscribe(data => {
    this.weatherData = data;
    this.showWeather = true;
  });

}

   onBack(): void {
   this.weatherData = undefined;
   this.cityName = '';

}
}
