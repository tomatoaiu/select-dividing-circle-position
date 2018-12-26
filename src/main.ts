import { circleDivider } from 'circle-divider'

export function selectDividingCirclePosition({ x = 0, y = 0, divideCount = 1, offset = 0 }: Arg): number {
  const rad = Math.atan2(y, x);
  let angle = Math.floor(rad * 180 / Math.PI);

  if (angle === 180) angle *= -1;

  return circleDivider({ divideCount, offset }).find((range: Range) => {
    return range.min <= angle && angle <= range.max;
  }).index
}

type Arg = {
  x: number;
  y: number;
  divideCount: number;
  offset?: number;
}

type Range = {
  min: number;
  max: number;
  index: number;
}
