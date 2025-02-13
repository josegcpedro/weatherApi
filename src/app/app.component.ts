import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http'; // <-- Importação necessária


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city = "Lucens";

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      console.log(data); // Exibe os dados no console
    });
  }
}
