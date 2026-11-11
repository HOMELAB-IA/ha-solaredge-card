import type { Hass } from './types.js';

export function getKw(hass: Hass, entityId: string): number {
  const entity = hass.states[entityId];
  if (!entity) return 0;
  const value = parseFloat(entity.state);
  if (isNaN(value)) return 0;
  const unit = (entity.attributes.unit_of_measurement as string) ?? '';
  return unit === 'W' ? value / 1000 : value;
}

export function getFloat(hass: Hass, entityId: string): number {
  const val = parseFloat(hass.states[entityId]?.state ?? '0');
  return isNaN(val) ? 0 : val;
}

export function formatKw(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 10) return String(Math.round(abs));
  if (abs >= 1) return abs.toFixed(1).replace('.', ',');
  return abs.toFixed(2).replace('.', ',');
}

export function badgeWidth(text: string): number {
  return Math.max(Math.ceil(text.length * 6) + 44, 80);
}

export function computeGridDisplay(rawKw: number): { text: string; dotColor: string } {
  const isExport = rawKw < 0;
  const kw = Math.abs(rawKw);
  return {
    text: isExport ? `Export ${formatKw(kw)} kW` : `Import ${formatKw(kw)} kW`,
    dotColor: isExport ? '#2fb3c0' : '#f59e4b',
  };
}

export function computeEvText(name: string, kw: number, bat: number | null): string {
  if (bat !== null) return `${name} · ${formatKw(kw)} kW · ${bat} %`;
  if (kw > 0.05) return `${name} · ${formatKw(kw)} kW`;
  return name;
}
