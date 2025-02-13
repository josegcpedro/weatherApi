import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = "";
  currentTemperature = 0;
  showTemperature: boolean = false;

  constructor(private weatherServices: WeatherService) { }

  getLocationWeather(city: string) {
    this.city = city
    console.log(city)
    this.weatherServices.getWeather(city).subscribe((data) =>{
      this.currentTemperature = data.current.temp_c
      this.showTemperature = true;

    })
  }
}
