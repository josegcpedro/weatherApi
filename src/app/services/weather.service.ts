import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "http://api.weatherapi.com/v1/current.json";
  private apiKey = "8b0cecf74ba14b2e8f4142125251302";

  private http = inject(HttpClient);

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.http.get(url);
  }
}
