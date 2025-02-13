import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city = "Aver-o-mar";
  currentTemperature = 0;

  constructor(private weatherServices: WeatherService){}

  ngOnInit(){
    this.weatherServices.getWeather(this.city).subscribe((data) =>{
      this.currentTemperature = data.current.temp_c
    });
  }
}
