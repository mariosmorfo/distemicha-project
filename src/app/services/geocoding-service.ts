import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private apiKey = '396b8398c0234ddda8a2e8de3d4d8402'


  constructor(private http: HttpClient) {}

  geocodeCity(cityName: string): Observable<{ lat: number; lon: number }> {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${this.apiKey}&language=el`;

    return this.http.get<any>(url).pipe(
      map(response => {
        if (response.results.length === 0) {
          throw new Error('City not found');
        }
        return {
          lat: response.results[0].geometry.lat,
          lon: response.results[0].geometry.lng
        };
      })
    );
  }
}
