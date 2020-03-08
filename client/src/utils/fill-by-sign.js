export default function fillBySign(command, canvas) {
  const [, x, y] = command.map((item) => +item);

  if (x >= canvas[0].length - 2 || x < 1 || y >= canvas.length - 2 || y < 1) {
    return `Canvas have not been filled`;
  }
  const sign = command[3];
  const target = canvas[y][x];

  const bucket = (x, y, target, sign, canvas) => {
    if (
      canvas[y][x] === `-` ||
      canvas[y][x] === `|` ||
      canvas[y][x] === sign ||
      canvas[y][x] !== target
    ) {
      return;
    }

    canvas[y][x] = sign;

    bucket(x + 1, y, target, sign, canvas);
    bucket(x - 1, y, target, sign, canvas);
    bucket(x, y + 1, target, sign, canvas);
    bucket(x, y - 1, target, sign, canvas);
  };
  bucket(x, y, target, sign, canvas);

  return canvas;
}
