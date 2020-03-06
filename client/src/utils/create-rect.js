import createLine from './create-line';

export default function createRect(command, canvas) {
  const [, x1, y1, x2, y2] = command.map((item) => +item);

  canvas = createLine([``, x1, y1, x1, y2], canvas);
  canvas = createLine([``, x2, y1, x2, y2], canvas);
  canvas = createLine([``, x1, y1, x2, y1], canvas);
  canvas = createLine([``, x1, y2, x2, y2], canvas);

  return canvas;
}
