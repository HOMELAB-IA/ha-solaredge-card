import { describe, it, expect } from 'vitest';
import { getKw, formatKw, badgeWidth, computeGridDisplay, computeEvText } from '../utils.js';
import type { Hass } from '../types.js';

function makeHass(states: Record<string, { state: string; unit?: string }>): Hass {
  return {
    states: Object.fromEntries(
      Object.entries(states).map(([id, { state, unit }]) => [
        id,
        { entity_id: id, state, attributes: { unit_of_measurement: unit ?? '' } },
      ]),
    ),
    callService: async () => {},
  };
}

describe('getKw', () => {
  it('convertit les W en kW', () => {
    const hass = makeHass({ 'sensor.p': { state: '3200', unit: 'W' } });
    expect(getKw(hass, 'sensor.p')).toBeCloseTo(3.2);
  });

  it('garde les kW tels quels', () => {
    const hass = makeHass({ 'sensor.p': { state: '3.2', unit: 'kW' } });
    expect(getKw(hass, 'sensor.p')).toBeCloseTo(3.2);
  });

  it('retourne 0 pour entité manquante', () => {
    const hass = makeHass({});
    expect(getKw(hass, 'sensor.absent')).toBe(0);
  });

  it('retourne 0 pour état invalide', () => {
    const hass = makeHass({ 'sensor.p': { state: 'unavailable', unit: 'W' } });
    expect(getKw(hass, 'sensor.p')).toBe(0);
  });
});

describe('formatKw', () => {
  it('entier pour >= 10', () => {
    expect(formatKw(12.7)).toBe('13');
    expect(formatKw(10)).toBe('10');
  });

  it('1 décimale (virgule) pour 1–10', () => {
    expect(formatKw(3.14)).toBe('3,1');
    expect(formatKw(1.0)).toBe('1,0');
  });

  it('2 décimales (virgule) pour < 1', () => {
    expect(formatKw(0.456)).toBe('0,46');
    expect(formatKw(0.1)).toBe('0,10');
  });

  it('utilise la valeur absolue', () => {
    expect(formatKw(-3.5)).toBe('3,5');
  });
});

describe('badgeWidth', () => {
  it('croît avec la longueur du texte', () => {
    const w1 = badgeWidth('AB');
    const w2 = badgeWidth('ABCDEFGH');
    expect(w2).toBeGreaterThan(w1);
  });

  it('minimum de 80', () => {
    expect(badgeWidth('')).toBe(80);
  });
});

describe('computeGridDisplay', () => {
  it('import quand rawKw > 0', () => {
    const result = computeGridDisplay(2.5);
    expect(result.text).toContain('Import');
    expect(result.dotColor).toBe('#f59e4b');
  });

  it('export quand rawKw < 0', () => {
    const result = computeGridDisplay(-1.8);
    expect(result.text).toContain('Export');
    expect(result.dotColor).toBe('#2fb3c0');
  });

  it('affiche la valeur absolue', () => {
    const result = computeGridDisplay(-3.0);
    expect(result.text).toContain('3,0');
    expect(result.text).not.toContain('-');
  });
});

describe('computeEvText', () => {
  it('affiche batterie quand présente', () => {
    expect(computeEvText('A390', 7.2, 85)).toBe('A390 · 7,2 kW · 85 %');
  });

  it('affiche puissance sans batterie', () => {
    expect(computeEvText('VE', 3.5, null)).toBe('VE · 3,5 kW');
  });

  it('affiche juste le nom si puissance nulle', () => {
    expect(computeEvText('VE', 0.01, null)).toBe('VE');
  });
});
