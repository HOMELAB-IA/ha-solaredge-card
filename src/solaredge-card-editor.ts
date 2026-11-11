import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { SolarEdgeCardConfig, Hass } from './types.js';

const SCHEMA = [
  { name: 'solar_power', selector: { entity: { domain: 'sensor' } } },
  { name: 'grid_power', selector: { entity: { domain: 'sensor' } } },
  { name: 'consumption', selector: { entity: { domain: 'sensor' } } },
  { name: 'ev_power', selector: { entity: { domain: 'sensor' } } },
  { name: 'ev_switch', selector: { entity: { domain: 'switch' } } },
  { name: 'ev_battery', selector: { entity: { domain: 'sensor' } } },
  { name: 'ev_name', selector: { text: {} } },
  { name: 'connectivity', selector: { entity: { domain: 'binary_sensor' } } },
  { name: 'alerts', selector: { entity: { domain: 'sensor' } } },
];

const LABELS: Record<string, string> = {
  solar_power: 'Production solaire (W/kW) ✱',
  grid_power: 'Puissance réseau (W/kW, >0 import, <0 export) ✱',
  consumption: 'Consommation totale (W/kW) ✱',
  ev_power: 'Puissance de charge VE',
  ev_switch: 'Switch borne de charge',
  ev_battery: 'Niveau batterie VE (%)',
  ev_name: 'Nom du véhicule (affiché dans le badge)',
  connectivity: 'Connectivité onduleur (binary_sensor)',
  alerts: "Nombre d'alertes onduleur",
};

const HELPERS: Record<string, string> = {
  solar_power: 'Capteur en Watt ou kWatt (ex: sensor.solar_power).',
  grid_power: 'Valeur positive = import depuis le réseau, négative = export.',
  consumption: 'Consommation totale de la maison (hors VE inclus si déjà dedans).',
};

export class SolarEdgeCardEditor extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: SolarEdgeCardConfig;

  setConfig(config: SolarEdgeCardConfig) {
    this._config = config;
  }

  render() {
    if (!this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(s: { name: string }) => LABELS[s.name] ?? s.name}
        .computeHelper=${(s: { name: string }) => HELPERS[s.name] ?? ''}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: ev.detail.value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

if (typeof customElements !== 'undefined') {
  customElements.define('solaredge-card-editor', SolarEdgeCardEditor);
}
