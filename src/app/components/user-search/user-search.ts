import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../../shared/interfaces/weather-data';
import { WeatherInfo } from '../weather-info/weather-info';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherBackground } from "../weather-background/weather-background";

@Component({
  selector: 'app-user-search',
  imports: [FormsModule, WeatherInfo, CommonModule, WeatherBackground],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css'
})
export class UserSearch {

weather: WeatherService = inject(WeatherService);

showWeather = false;
weatherData?: WeatherData;


  favorites : string[] = [];
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

  onFavorite(cityName: string): void{
    if(!this.favorites.includes(cityName)){
      this.favorites.push(cityName)
    }
  }

  onFavoriteSearch(cityName: string): void {
  this.cityName = cityName;
  this.onSearch();
}

  onDeleteCity(cityName: string): void {
    this.favorites = this.favorites.filter(city => city !== cityName)
  }

}
