import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';

export interface WeatherData {
  name?: string;
  main?: {
    temp: number,
    feels_like: number,
    temp_max: number,
    temp_min: number,
    pressure: number,
    humidity: number;
  };
  weather?: [
    {
      description: string,
      icon: string;
    }
  ];
  wind?: {
    speed: number;
  };
}

export interface WeatherProps {
  weatherData: WeatherData;
}

export class Weather extends Model {

  static buildModel(): Weather {
    return new Weather(new Attributes<WeatherProps>({ weatherData: {} }), new ApiSync('https://api.openweathermap.org/data/2.5/'), new Eventing());
  }
}