import { View } from '../View';
import { Weather } from '../../models/Weather';

enum WeatherDataType {
  Weather = 'weather',
  Forecast = 'forecast'
}

export class SearchBar extends View<Weather> {
  eventsMap(): { [key: string]: (e?: Event) => void; } {
    return {
      'submit:form': this.onFormSubmit,
      'click:.geolocation': this.onClick
    };
  }

  onClick = (): void => {
    const successCallback = async (position) => {
      const { latitude, longitude } = await position.coords;
      this.model.fetch(WeatherDataType.Weather, { lat: latitude, lon: longitude });
      this.model.fetch(WeatherDataType.Forecast, { lat: latitude, lon: longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  };

  onFormSubmit = (e?: Event): void => {
    if (e) {
      e.preventDefault();
      const input = this.parent.querySelector('input');
      if (input) {
        const cityName = input.value;
        this.model.fetch(WeatherDataType.Weather, cityName);
        this.model.fetch(WeatherDataType.Forecast, cityName);
      }
    }
  };

  template(): string {
    return /*html*/ `
      <div class='searchbar'>
        <button class='geolocation'>
          <i class='fa-solid fa-location-crosshairs'></i>
        </button>
        <form class='search-input-form'>
          <input autocomplete='off' type='text' name='search' placeholder='Enter city name' />
          <button class='search' type='submit'>
            <i class='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </div>
    `;
  }
}