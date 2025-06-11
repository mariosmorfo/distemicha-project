import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../../shared/interfaces/weather-data';
import { WeatherInfo } from '../weather-info/weather-info';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherBackground } from "../weather-background/weather-background";
import { GeocodingService } from '../../services/geocoding-service';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule, WeatherInfo, CommonModule, WeatherBackground],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css'
})
export class UserSearch {

weather: WeatherService = inject(WeatherService);
geocoding: GeocodingService = inject(GeocodingService);


showWeather = false;
weatherData?: WeatherData;


  favorites: { cityName: string; country: string }[] = [];
  cityName: string= "";

  onSearch(): void {
  const lang = navigator.language.startsWith('el') ? 'el' : 'en';

  this.geocoding.geocodeCity(this.cityName).subscribe({
    next: location => {
      const qParam = `${location.lat},${location.lon}`;

      this.weather.getWeather(qParam, 'en').subscribe({
        next: data => {
          this.weatherData = data;
          this.showWeather = true;
        },
        error: () => {
          alert('Could not fetch weather data. Please check the city name.');
        }
      });
    },
    error: () => {
      alert('Could not find this city.');
    }
  });
}
 
   onBack(): void {
   this.weatherData = undefined;
   this.cityName = '';

}

onFavorite(fav: { cityName: string; country: string }): void {
  if (!this.favorites.find(city => city.cityName === fav.cityName && city.country === fav.country)) {
    this.favorites.push(fav);
  }
}

onDeleteCity(cityToDelete: { cityName: string; country: string }): void {
  this.favorites = this.favorites.filter(city =>
    city.cityName !== cityToDelete.cityName || city.country !== cityToDelete.country
  );
  this.weatherData = undefined;
  this.cityName = '';
}
}
