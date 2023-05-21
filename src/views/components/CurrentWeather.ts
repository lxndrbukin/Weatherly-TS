import { View } from '../View';
import { Weather } from '../../models/Weather';
import { WeatherData } from '../../models/Weather';

interface HWP {
  name: string,
  icon: string,
  value: string;
}

interface Temp {
  icon: string,
  value: number;
}

export class CurrentWeather extends View<Weather> {

  hwpArray(): HWP[] {
    const weatherData: WeatherData = this.model.get('weatherData');
    if (weatherData && weatherData.main && weatherData.weather && weatherData.wind) {
      return [
        {
          name: 'Humidity',
          icon: 'fa-solid fa-droplet',
          value: `${weatherData.main.humidity}%`,
        },
        {
          name: 'Wind',
          icon: 'fa-solid fa-wind',
          value: `${weatherData.wind.speed}m/s`,
        },
        {
          name: 'Pressure',
          icon: 'fa-solid fa-gauge-high',
          value: `${weatherData.main.pressure}hPa`,
        },
      ];
    }
    return [];
  }

  tempArray(): Temp[] {
    const weatherData: WeatherData = this.model.get('weatherData');
    if (weatherData && weatherData.main) {
      return [
        {
          icon: 'fa-solid fa-up-long',
          value: Math.round(weatherData.main.temp_max),
        },
        {
          icon: 'fa-solid fa-down-long',
          value: Math.round(weatherData.main.temp_min),
        },
      ];
    }
    return [];
  }

  renderHWP(): string[] {
    const hwpArray = this.hwpArray();
    return hwpArray.map((item: HWP): string => {
      return /*html*/ `
        <div class='hwp'>
          <i class='${item.icon}'></i>
          <span class='label'>${item.name}</span>
          <span class='value'>${item.value}</span>
        </div>
      `;
    });
  }

  renderTemps(): string[] {
    const tempArray = this.tempArray();
    return tempArray.map((temp: Temp): string => {
      return /*html*/ `
        <div class='temp'>
          <i class='${temp.icon}'></i>
          <span class='value'>${temp.value}°</span>
        </div>
      `;
    });
  }

  template(): string {
    const weatherData: WeatherData = this.model.get('weatherData');
    if (weatherData && weatherData.main && weatherData.weather) {
      return /*html*/ `
        <section class='current-weather'>
          <h4 class='current-weather-header'>Current Weather</h4>
          <div class='current-weather-info'>
            <div class='info-left'>
              <h3 class='city-name'>${weatherData.name}</h3>
              <div class='city-temp'>
                <img
                  src='${`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}'
                  alt='${weatherData.name}'
                />
                <h1 class='city-temp-value'>${Math.round(weatherData.main.temp)}°</h1>
              </div>
              <h3 class='description'>${weatherData.weather[0].description}</h3>
            </div>
            <div class='info-right'>
              <h4 class='feel'>
                Feels like ${Math.round(weatherData.main.feels_like)}°
              </h4>
              <div class='temps'>${this.renderTemps().join('')}</div>
              ${this.renderHWP().join('')}
            </div>
          </div>
        </section>
      `;
    }
    return ``;
  }
}