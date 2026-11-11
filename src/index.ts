import { SolarEdgeCard } from './solaredge-card.js';
import './solaredge-card-editor.js';

if (typeof customElements !== 'undefined') {
  customElements.define('solaredge-card', SolarEdgeCard);
}
