import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { SolarEdgeCardConfig, Hass } from './types.js';
import {
  getKw,
  getFloat,
  formatKw,
  badgeWidth,
  computeGridDisplay,
  computeEvText,
} from './utils.js';

export class SolarEdgeCard extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @state() private _config?: SolarEdgeCardConfig;

  static styles = css`
    :host {
      display: block;
    }
    ha-card {
      overflow: hidden;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `;

  setConfig(config: SolarEdgeCardConfig) {
    if (!config.solar_power) throw new Error('solar_power est requis');
    if (!config.grid_power) throw new Error('grid_power est requis');
    if (!config.consumption) throw new Error('consumption est requis');
    this._config = config;
  }

  static getCardSize(): number {
    return 4;
  }

  render() {
    if (!this._config || !this.hass) return nothing;

    const cfg = this._config;
    const hass = this.hass;

    const solarKw = getKw(hass, cfg.solar_power);
    const rawGridKw = getKw(hass, cfg.grid_power);
    const totalKw = getKw(hass, cfg.consumption);
    const evKw = cfg.ev_power ? getKw(hass, cfg.ev_power) : 0;
    const evBat = cfg.ev_battery ? Math.round(getFloat(hass, cfg.ev_battery)) : null;
    const evName = cfg.ev_name ?? 'VE';
    const isDay = solarKw > 0.1;

    // La consommation maison exclut la charge VE
    const houseKw = Math.max(0, totalKw - evKw);

    const solarText = `${formatKw(solarKw)} kW`;
    const { text: gridText, dotColor: gridDot } = computeGridDisplay(rawGridKw);
    const houseText = `Maison ${formatKw(houseKw)} kW`;
    const evText = computeEvText(evName, evKw, evBat);

    return html`<ha-card>${this._scene(isDay, solarText, gridText, houseText, evText, gridDot)}</ha-card>`;
  }

  private _scene(
    isDay: boolean,
    solarText: string,
    gridText: string,
    houseText: string,
    evText: string,
    gridDot: string,
  ) {
    const bg = isDay ? '#ffffff' : '#dfe5f0';
    const panelFill = isDay ? '#2a4a92' : '#1a2b54';
    const windowFill = isDay ? '#bcd3ee' : '#ffd88a';
    const ledColor = isDay ? '#33c27a' : '#9aa5b4';
    const dayOp = isDay ? 1 : 0;
    const nightOp = isDay ? 0 : 1;
    const badgeBg = isDay ? '#ffffff' : '#edf0f7';

    const sw = badgeWidth(solarText);
    const gw = badgeWidth(gridText);
    const hw = badgeWidth(houseText);
    const ew = badgeWidth(evText);

    // positions badges
    const sx = 175 - sw / 2; // solar : centré
    const gx = 342 - gw; // grid  : aligné droite

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 350 280"
        role="img"
        aria-label="Flux d'énergie solaire en temps réel"
      >
        <!-- fond -->
        <rect x="0" y="0" width="350" height="280" rx="22" fill="${bg}" />
        <!-- plateforme 3D -->
        <polygon points="10.5,165 175,260 175,270 10.5,175" fill="#d3dbe6" />
        <polygon points="175,260 339.5,165 339.5,175 175,270" fill="#c3cddb" />
        <polygon points="175,70 339.5,165 175,260 10.5,165" fill="#e9eef5" />
        <!-- toit -->
        <polygon points="175,45 242.5,84 213.1,67 145.6,28" fill="#8f5a43" />
        <!-- murs maison -->
        <polygon points="123,120 183.7,155 183.7,110 123,75" fill="#f6f2ec" />
        <polygon points="235.6,125 183.7,155 183.7,110 209.6,65 235.6,80" fill="#e0d9cf" />
        <polygon points="116.1,79 183.7,118 213.1,67 145.6,28" fill="#ab6d50" />
        <!-- panneaux solaires -->
        <polygon
          points="130,75 180.2,104 199.2,71 149,42"
          fill="${panelFill}"
          stroke="#5d7fc4"
          stroke-width="0.8"
        />
        <path
          d="M146.7 84.7 L165.7 51.7 M163.4 94.3 L182.4 61.3 M139.5 58.5 L189.7 87.5"
          stroke="#5d7fc4"
          stroke-width="0.8"
        />
        <!-- porte -->
        <polygon points="140.4,130 150.8,136 150.8,112 140.4,106" fill="#8a6f5c" />
        <!-- fenêtres -->
        <polygon points="161.1,128 175,136 175,120 161.1,112" fill="${windowFill}" />
        <polygon points="227,114 216.6,120 216.6,106 227,100" fill="${windowFill}" />
        <!-- rails flux (fond gris) -->
        <path
          d="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L227 200 L296.2 160"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L128.2 143 L145.6 133"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188 177.5 L150.8 199 L108.3 174.5"
          fill="none"
          stroke="#d6e1ef"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- flux jour : solaire actif -->
        <g opacity="${dayOp}">
          <path
            d="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            fill="none"
            stroke="#f5a524"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L227 200 L296.2 160"
            fill="none"
            stroke="#2fb3c0"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L128.2 143 L145.6 133"
            fill="none"
            stroke="#3ccf7e"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L150.8 199 L108.3 174.5"
            fill="none"
            stroke="#3ccf7e"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <circle r="3.6" fill="#f5a524">
            <animateMotion
              dur="1.2s"
              repeatCount="indefinite"
              path="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f5a524">
            <animateMotion
              dur="1.2s"
              begin="-0.6s"
              repeatCount="indefinite"
              path="M203.6 140.5 L203.6 148.5 L220.9 158.5 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#2fb3c0">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M188 177.5 L227 200 L296.2 160"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#2fb3c0">
            <animateMotion
              dur="2s"
              begin="-1s"
              repeatCount="indefinite"
              path="M188 177.5 L227 200 L296.2 160"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="2.4s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="2.4s"
              begin="-1.2s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#3ccf7e">
            <animateMotion
              dur="1.5s"
              begin="-0.75s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
        </g>
        <!-- flux nuit : import réseau -->
        <g opacity="${nightOp}">
          <path
            d="M296.2 160 L227 200 L188 177.5"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L128.2 143 L145.6 133"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <path
            d="M188 177.5 L150.8 199 L108.3 174.5"
            fill="none"
            stroke="#f59e4b"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.3s"
              repeatCount="indefinite"
              path="M296.2 160 L227 200 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.3s"
              begin="-0.65s"
              repeatCount="indefinite"
              path="M296.2 160 L227 200 L188 177.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M188 177.5 L128.2 143 L145.6 133"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
          <circle r="3.6" fill="#f59e4b">
            <animateMotion
              dur="1.5s"
              begin="-0.75s"
              repeatCount="indefinite"
              path="M188 177.5 L150.8 199 L108.3 174.5"
            ></animateMotion>
          </circle>
        </g>
        <!-- hub onduleur -->
        <ellipse cx="188" cy="177.5" rx="7" ry="4" fill="#ffffff" stroke="#9fb7d6" stroke-width="1.5" />
        <!-- boîtier onduleur -->
        <polygon
          points="209.6,137 198.4,143.5 198.4,121.5 209.6,115"
          fill="#f7f9fc"
          stroke="#b7c3d3"
          stroke-width="0.6"
        />
        <polygon points="194.1,141 198.4,143.5 198.4,121.5 194.1,119" fill="#c9d3e0" />
        <polygon points="205.3,112.5 209.6,115 198.4,121.5 194.1,119" fill="#e3e9f1" />
        <path d="M207 134.5 L203.6 136.5" stroke="${ledColor}" stroke-width="1.6" stroke-linecap="round" />
        <!-- pylône réseau -->
        <path
          d="M282.4 160 L296.2 65 L310.1 160 M296.2 168 L296.2 65 M278.9 72 L313.6 92 M281.5 89.5 L311 106.5 M286 120 L306 132 M286 132 L306 120 M289 145 L304 154"
          fill="none"
          stroke="#6b7480"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- roues VE -->
        <ellipse cx="38.2" cy="162" rx="5" ry="3.6" fill="#1f2430" />
        <ellipse cx="62.4" cy="176" rx="5" ry="3.6" fill="#1f2430" />
        <ellipse cx="86.7" cy="172" rx="3.6" ry="5" fill="#1f2430" />
        <!-- carrosserie VE -->
        <polygon points="29.5,158 71.1,182 71.1,169 29.5,145" fill="#2b5fa8" />
        <polygon points="91.9,170 71.1,182 71.1,169 91.9,157" fill="#214c88" />
        <polygon points="50.3,133 91.9,157 71.1,169 29.5,145" fill="#3a72c2" />
        <!-- vitres VE -->
        <polygon points="39,149.5 63.3,163.5 60.7,149 45.1,140" fill="#22344f" />
        <polygon points="82.3,152.5 63.3,163.5 60.7,149 76.3,140" fill="#1b2a40" />
        <polygon points="60.7,131 76.3,140 60.7,149 45.1,140" fill="#30466a" />
        <!-- connecteur VE -->
        <path d="M74.5 172 L78.9 169.5" stroke="#e8f1ff" stroke-width="2" stroke-linecap="round" />
        <!-- borne de charge -->
        <polygon points="109.2,172 104,175 104,145 109.2,142" fill="#374151" />
        <polygon points="98.8,172 104,175 104,145 98.8,142" fill="#1f2937" />
        <polygon points="104,139 109.2,142 104,145 98.8,142" fill="#4b5563" />
        <polygon points="108.3,154.5 104.9,156.5 104.9,149.5 108.3,147.5" fill="#3ccf7e" />
        <!-- câble borne -->
        <path d="M106.6 153.5 Q96 172 89 163" fill="none" stroke="#1f2937" stroke-width="1.6" stroke-linecap="round" />
        <!-- badges valeurs -->
        <g
          font-family="Inter, Roboto, Helvetica, Arial, sans-serif"
          font-size="11"
          font-weight="600"
          fill="#1f2430"
        >
          <!-- production solaire (centré en haut) -->
          <rect x="${sx}" y="2" width="${sw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="${sx + 12}" cy="13" r="4" fill="#f5a524" />
          <text x="${sx + 22}" y="17">${solarText}</text>
          <!-- échange réseau (droite) -->
          <rect x="${gx}" y="26" width="${gw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="${gx + 12}" cy="37" r="4" fill="${gridDot}" />
          <text x="${gx + 22}" y="41">${gridText}</text>
          <!-- consommation maison (gauche) -->
          <rect x="8" y="98" width="${hw}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="20" cy="109" r="4" fill="#7ea6f6" />
          <text x="30" y="113">${houseText}</text>
          <!-- VE (bas gauche) -->
          <rect x="10" y="196" width="${ew}" height="22" rx="11" fill="${badgeBg}" stroke="#e5e8ee" />
          <circle cx="22" cy="207" r="4" fill="#8b5cf6" />
          <text x="32" y="211">${evText}</text>
        </g>
      </svg>
    `;
  }
}
