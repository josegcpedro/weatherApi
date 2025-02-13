import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = "";
  currentTemperature = 0;
  showTemperature: boolean = false;
  time: string = "";
  showTime: boolean = false;

  constructor(private weatherServices: WeatherService) { }

  getLocationWeather(city: string) {
    this.city = city;
    console.log(city);
    this.weatherServices.getWeather(city).subscribe((data) => {
    this.currentTemperature = data.current.temp_c;
    this.time = data.current.last_updated
    this.showTemperature = true;
    this.showTime = true;
    })
  }
}
