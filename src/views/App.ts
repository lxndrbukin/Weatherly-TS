import { View } from './View';
import { Weather } from '../models/Weather';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';

export class App extends View<Weather> {
  regionsMap(): { [key: string]: string; } {
    return {
      header: '.header',
      searchBar: '.searchbar-wrapper',
      container: '.container',
      currentWeather: '.current-weather-wrapper',
      forecast: '.forecast-wrapper',
    };
  }

  onRender(): void {
    new Header(this.regions.header, this.model).render();
    new SearchBar(this.regions.searchBar, this.model).render();
    this.model.on('change', () => {
      new CurrentWeather(this.regions.currentWeather, this.model).render();
    });
  }

  template(): string {
    return /*html*/`
      <div class='app'>
        <div class='header'></div>
        <div class='searchbar-wrapper'></div>
        <div class='container'>
          <div class='current-weather-wrapper'></div>
          <div class='forecast-wrapper'></div>
        </div>
      </div>
    `;
  }
}