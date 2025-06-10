import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSearch } from "./components/user-search/user-search";
import { WeatherInfo } from "./components/weather-info/weather-info";



@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, UserSearch, WeatherInfo ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'distemicha-project';
}
