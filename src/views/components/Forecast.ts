import { View } from '../View';
import { Weather } from '../../models/Weather';
import { ForecastData } from '../../models/interfaces/DataInterfaces';

export class Forecast extends View<Weather> {
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  renderDays(forecastData: ForecastData): string[] {
    if (forecastData && forecastData.list) {
      return forecastData.list.map((time): string => {
        if (time.dt_txt.includes('12:00:00')) {
          const dayNum = new Date(time.dt * 1000).getDay();
          return /*html*/ `
            <div class='day'>
              <h2>${this.days[dayNum]}</h2>
              <img src='${`http://openweathermap.org/img/wn/${time.weather[0].icon}.png`}' alt={day} />
              <h4 class='desc'>${time.weather[0].description}</h4>
              <span>${Math.round(time.main.temp)}°</span>
            </div>
          `;
        }
        return '';
      });
    }
    return [];
  }

  template(): string {
    const forecastData: ForecastData = this.model.get('forecastData');
    return /*html*/ `
      <section class='forecast'>
        <h4 class='forecast-header'>5-day forecast</h4>
        <div class='forecast-days'>
          ${this.renderDays(forecastData).join('')}
        </div>
      </section>
    `;
  }
}