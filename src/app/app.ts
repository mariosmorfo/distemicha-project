import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSearch } from "./components/user-search/user-search";
import { WeatherInfo } from "./components/weather-info/weather-info";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowLeft } from '@ng-icons/feather-icons';
import { bootstrapBalloonHeart } from '@ng-icons/bootstrap-icons';






@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, UserSearch, WeatherInfo, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
   viewProviders: [provideIcons({featherArrowLeft, bootstrapBalloonHeart  })]
})
export class App {
  protected title = 'distemicha-project';
}
