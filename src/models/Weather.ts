import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { WeatherData, ForecastData } from './interfaces/DataInterfaces';

export interface WeatherProps {
  weatherData: WeatherData;
  forecastData: ForecastData;
}

export class Weather extends Model {
  static buildModel(): Weather {
    return new Weather(
      new Attributes<WeatherProps>({ weatherData: {}, forecastData: {} }),
      new ApiSync('https://api.openweathermap.org/data/2.5/'),
      new Eventing()
    );
  }
}