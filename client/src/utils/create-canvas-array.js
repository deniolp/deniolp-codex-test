export default function createCanvasArray(height, width) {
  const canvas = [];

  for (let i = 0; i < +width + 2; i++) {
    canvas[i] = [];
    for (let k = 0; k < +height + 2; k++) {
      canvas[i][k] =
        !i || i === +width + 1 ? `-` : !k || k === +height + 1 ? `|` : ` `;
    }
  }
  return canvas;
}
