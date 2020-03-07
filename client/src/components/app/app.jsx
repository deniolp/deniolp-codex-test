import React, {useState} from 'react';

import Canvas from '../canvas/canvas';
import {drawPaint, paint, paintForSave, isCanvasExist} from '../../utils/draw-paint';

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
      <h3>Привет!</h3>
      <p>Эта программа рисует псевдографику, читая инструкции из файла /data/input.txt. Если вы сделали "npm i", а затем "npm run dev", вы уже видите внизу это произведение искусства. Сами вы тоже можете рисовать с помощью подобных инструкций, написав их в "input.txt". "npm run dev" запускает 2 сервера (express на backend, а второй на клиенте). Нажатие на кнопку сохранит ваш рисунок в /data/output.txt</p>
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
