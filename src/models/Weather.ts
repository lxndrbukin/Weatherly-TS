import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';

export interface WeatherData {
  weather: object;
  forecast: object;
}

export class Weather extends Model {

  static buildModel(): Weather {
    return new Weather(new Attributes({ weather: {}, forecast: {} }), new ApiSync('https://api.openweathermap.org/data/2.5/'), new Eventing());
  }
}