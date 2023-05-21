import { View } from '../View';
import { Weather } from '../../models/Weather';

export class Header extends View<Weather> {
  template(): string {
    return /*html*/ `
      <div class='logo'>Weatherly</div>
    `;
  }
}