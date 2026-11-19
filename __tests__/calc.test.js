import { add, subtract, multiply, divide } from '../src/calc.js';

describe('calc', () => {
  test('add additionne deux nombres', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract soustrait deux nombres', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply multiplie deux nombres', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divide divise deux nombres', () => {
    expect(divide(10, 4)).toBe(2.5);
  });

  test('divide refuse la division par zéro', () => {
    expect(() => divide(1, 0)).toThrow(RangeError);
  });

  test('rejette les valeurs non numériques', () => {
    expect(() => add('2', 3)).toThrow(TypeError);
    expect(() => multiply(2, NaN)).toThrow(TypeError);
  });
});
