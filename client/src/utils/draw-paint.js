import createCanvasArray from '../utils/create-canvas-array';
import createLine from '../utils/create-line';
import createRect from '../utils/create-rect';
import fillBySign from '../utils/fill-by-sign';

let isCanvasExist = false;
let paint = ``;
let paintForSave = ``;
let canvasArray = [];
let canvasCopy = [];

const drawPart = (array) =>
  array.reduce((acc, innerArray) => `${acc}${innerArray.join(``)}\n`, ``);

const drawPaint = (commands) => {
  commands.pop();
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i][0]) {
      case `C`:
        canvasArray = createCanvasArray(commands[i][1], commands[i][2]);
        paint += drawPart(canvasArray);
        paintForSave = paint;
        isCanvasExist = true;
        break;
      case `L`:
        canvasCopy = canvasArray.slice();
        const canvasWithLine = isCanvasExist
          ? createLine(commands[i], canvasCopy)
          : `Canvas did not created`;
        paintForSave +=
          typeof canvasWithLine === `string`
            ? canvasArray
            : drawPart(canvasWithLine);
        paint =
          typeof canvasWithLine === `string`
            ? canvasWithLine
            : drawPart(canvasWithLine);
        if (typeof canvasWithLine === `string`) {
          return;
        }
        break;
      case `R`:
        canvasCopy = canvasArray.slice();
        const canvasWithRect = isCanvasExist
          ? createRect(commands[i], canvasCopy)
          : `Canvas did not created`;
        paintForSave +=
          typeof canvasWithRect === `string`
            ? canvasArray
            : drawPart(canvasWithRect);
        paint =
          typeof canvasWithRect === `string`
            ? canvasArray
            : drawPart(canvasWithRect);
        if (typeof canvasWithRect === `string`) {
          return;
        }
        break;
      case `B`:
        canvasCopy = canvasArray.slice();
        const canvasFilled = isCanvasExist
          ? fillBySign(commands[i], canvasCopy)
          : `Canvas did not created`;
        paintForSave +=
          typeof canvasFilled === `string`
            ? `Out of canvas\n`
            : drawPart(canvasFilled);
        paint =
          typeof canvasFilled === `string`
            ? `Out of canvas\n`
            : drawPart(canvasFilled);
        if (typeof canvasFilled === `string`) {
          return;
        }
        break;
      default:
        paintForSave = `Canvas did not created`;
        break;
    }
  }
  return {
    paint,
    paintForSave,
    isCanvasExist,
  };
};

export {drawPaint};
