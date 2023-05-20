import { View } from '../View';
import { Weather } from '../../models/Weather';

export class CurrentWeather extends View<Weather> {
  template(): string {
    const weather = this.model.get('weather');
    if (weather) {
      console.log(weather);
    }
    return /*html*/ `
      <section class='current-weather'>
        <h4 class='current-weather-header'>Current Weather</h4>
        <div class='current-weather-info'>
          <div class='info-left'>
            <h3 class='city-name'>City</h3>
            <div class='city-temp'>
              <img
                src='${`http://openweathermap.org/img/wn/icon.png`}'
                alt='City'
              />
              <h1 class='city-temp-value'>Temp°</h1>
            </div>
            <h3 class='description'>Desc</h3>
          </div>
          <div class='info-right'>
            <h4 class='feel'>
              Feels like °
            </h4>
            <div class='temps'>Temp°</div>
            Hwp
          </div>
        </div>
      </section>
    `;
  }
}