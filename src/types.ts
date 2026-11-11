export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

export interface SolarEdgeCardConfig {
  type: string;
  /** sensor avec unit W ou kW — production panneaux */
  solar_power: string;
  /** sensor avec unit W ou kW — >0 = import réseau, <0 = export */
  grid_power: string;
  /** sensor avec unit W ou kW — consommation totale (maison + VE) */
  consumption: string;
  /** puissance de charge VE (W ou kW) — optionnel */
  ev_power?: string;
  /** switch on/off borne de charge — optionnel */
  ev_switch?: string;
  /** niveau batterie VE en % — optionnel */
  ev_battery?: string;
  /** nom affiché du véhicule, défaut "VE" */
  ev_name?: string;
  /** binary_sensor connectivité onduleur — optionnel */
  connectivity?: string;
  /** sensor nombre d'alertes — optionnel */
  alerts?: string;
}
