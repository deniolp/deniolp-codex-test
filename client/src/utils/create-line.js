export default function createLine(command, canvas) {
  let [, x1, y1, x2, y2] = command.map((item) => +item);
  const canvasCopy = canvas.slice();

  if (x1 > x2) {
    [x1, x2] = [x2, x1];
  }
  if (y1 > y2) {
    [y1, y2] = [y2, y1];
  }
  x1 = x1 < 1 ? 1 : x1;
  y1 = y1 < 1 ? 1 : y1;
  if (x1 === x2) {
    x2 = x2 >= canvasCopy[0].length - 1 ? canvasCopy[0].length - 2 : x2;
    x1 = x2;
  }
  if (y1 === y2) {
    y2 = y2 >= canvasCopy.length - 1 ? canvasCopy.length - 2 : y2;
    y1 = y2;
  }
  x2 = x2 >= canvasCopy[0].length - 1 ? canvasCopy[0].length - 2 : x2;
  y2 = y2 >= canvasCopy.length - 1 ? canvasCopy.length - 2 : y2;

  if (x1 === x2) {
    for (let i = y1; i <= y2; i++) {
      canvasCopy[i][x1] = `x`;
    }
  }

  if (y1 === y2) {
    for (let i = x1; i <= x2; i++) {
      canvasCopy[y1][i] = `x`;
    }
  }

  if (x1 !== x2 && y1 !== y2) {
    return `Error: it should be line`;
  }

  if (canvasCopy === canvas) {
    return `Out of canvas`;
  }

  return canvasCopy;
}
