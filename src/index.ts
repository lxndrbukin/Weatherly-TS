import './styles.css';
import { Weather } from './models/Weather';
import { App } from './views/App';

const root = document.querySelector('#root');
const model = Weather.buildModel();

if (root) {
  new App(root, model).render();
}
