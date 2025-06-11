import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherData } from '../../shared/interfaces/weather-data';
const apiKey = "d108e95ddac34a62be9111704251006";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {



constructor(private http: HttpClient){}

getWeather(cityNameOrLatLon: string, lang: string = 'en'): Observable<WeatherData> {
  const url = `/weatherapi/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityNameOrLatLon)}&lang=${lang}`;




    return this.http.get<any>(url).pipe(
      map(response => {

        let description = response.current.condition.text;
  
       if (response.current.is_day === 0 && description === 'Sunny') {
          description = 'Clear';
         }
        return{
          cityName: response.location.name,
          country: response.location.country,
          temperature: response.current.temp_c,
          weatherDescription: description,
          weatherIconUrl: 'https:' + response.current.condition.icon,
           isDay: response.current.is_day === 1

        }
      })
    )
  }
}
