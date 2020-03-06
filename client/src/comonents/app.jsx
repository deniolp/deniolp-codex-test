import React, {useState} from 'react';

import Canvas from './canvas';
import {drawPaint, paint, paintForSave, isCanvasExist} from '../utils/draw-paint';

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
      <button
        onClick={() => saveFile(paintForSave)}
        disabled={isSended || !isCanvasExist}
        >{!isSended ? `Save the painting` : `Data had been sended to server and saved as output.txt`}
      </button>
      <Canvas value={paint}></Canvas>
    </div>
  );
}

export default App;
