import React, {useState} from 'react';

import Canvas from './canvas';
import createCanvasArray from '../utils/create-canvas-array';
import createLine from '../utils/create-line';
import createRect from '../utils/create-rect';
import fillBySign from '../utils/fill-by-sign';

let isCanvasExist = false;
let paint = ``;
let paintForSave = ``;
let canvasArray = [];
let canvasCopy = [];

const drawPart = (array) => array.reduce((acc, innerArray) => `${acc}${innerArray.join(``)}\n`, ``);

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
        const canvasWithLine = (isCanvasExist) ? createLine(commands[i], canvasCopy) : `Canvas did not created`;
        paintForSave += (typeof canvasWithLine === `string`) ? `${canvasArray}\n` : drawPart(canvasWithLine);
        paint = (typeof canvasWithLine === `string`) ? `${canvasArray}\n` : drawPart(canvasWithLine);
        break;
      case `R`:
        canvasCopy = canvasArray.slice();
        const canvasWithRect = (isCanvasExist) ? createRect(commands[i], canvasCopy) : `Canvas did not created`;
        paintForSave += (typeof canvasWithRect === `string`) ? `${canvasArray}\n` : drawPart(canvasWithRect);
        paint = (typeof canvasWithRect === `string`) ? `${canvasArray}\n` : drawPart(canvasWithRect);
        break;
      case `B`:
        canvasCopy = canvasArray.slice();
        const canvasA = (isCanvasExist) ? fillBySign(commands[i], canvasCopy) : `Canvas did not created`;
        paintForSave += (typeof canvasA === `string`) ? `Out of canvas\n` : drawPart(canvasA);
        paint = (typeof canvasA === `string`) ? `Out of canvas\n` : drawPart(canvasA);
        break;
      default:
        paintForSave = `Canvas did not created`;
        break;
    }
  }
}

const App = (props) => {
const {data} = props;
const [isSended, setIsSended] = useState(false);

const commands = data.map((item) => item.trim().split(' '));

drawPaint(commands);

const saveFile = async (paintForSave) => {
  await fetch(`http://localhost:5000/`, {method: `POST`, body: JSON.stringify({data: paintForSave}), headers: {'Content-Type': 'application/json'}})
    .then((res) => {
      if(res.ok === true) {
        setIsSended(true);
      }
    });
}

  return (
    <div>
      <h1>Hi friends!</h1>
      <button onClick={() => saveFile(paintForSave)}>{!isSended ? `Save the painting` : `Data had been sended to server and saved as output.txt`}</button>
      <Canvas value={paint}></Canvas>
    </div>
  );
}

export default App;
