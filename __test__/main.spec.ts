import { selectDividingCirclePosition } from '../src/main'

describe('select dividing circle position', () => {

  test('x: 10, y: 0 is 1', () => {
    expect(selectDividingCirclePosition({ x: 10, y: 0, divideCount: 4 })).toEqual(1);
  });

  test('x: 0, y: 10 is 2', () => {
    expect(selectDividingCirclePosition({ x: 0, y: 10, divideCount: 4 })).toEqual(2);
  });

  test('x: -10, y: 0 is 3', () => {
    expect(selectDividingCirclePosition({ x: -10, y: 0, divideCount: 4 })).toEqual(3);
  });

  test('x: 0, y: -10 is 4', () => {
    expect(selectDividingCirclePosition({ x: 0, y: -10, divideCount: 4 })).toEqual(4);
  });

  test('x: -10, y: -0.1 is 3', () => {
    expect(selectDividingCirclePosition({ x: -10, y: -0.1, divideCount: 4 })).toEqual(3);
  });

  test('x: 10, y: 0.1 is 1', () => {
    expect(selectDividingCirclePosition({ x: 10, y: 0.1, divideCount: 4 })).toEqual(1);
  });

  test('x: -10, y: -10 is 4', () => {
    expect(selectDividingCirclePosition({ x: -10, y: -10, divideCount: 4 })).toEqual(4);
  });

  test('x: 0, y: 0 is 1', () => {
    expect(selectDividingCirclePosition({ x: 0, y: 0, divideCount: 4 })).toEqual(1);
  });

});
