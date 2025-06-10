import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherData } from '../../shared/interfaces/weather-data';
const apiKey = "d108e95ddac34a62be9111704251006";
const apiUrl = "https://api.weatherapi.com/";


@Injectable({
  providedIn: 'root'
})
export class Weather {



  http: HttpClient = inject(HttpClient);
  constructor() { }

  getWeather(cityName: string):Observable<WeatherData>{
    const url = `${apiUrl}/v1/current.json?key=${apiKey}&q=${cityName}`

    return this.http.get<any>(url).pipe(
      map(response => {
        return{
          cityName: response.location.name,
          country: response.location.country,
          temperature: response.current.temp_c,
          weatherDescription: response.current.condition.text,
          weatherIconUrl: 'https:' + response.current.condition.icon

        } as WeatherData;
      })
    )

  }
}
