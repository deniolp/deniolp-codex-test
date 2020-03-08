import React, {useState} from 'react';

import Canvas from '../canvas/canvas';
import {drawPaint} from '../../utils/draw-paint';

const App = (props) => {
  const {data} = props;
  const [isSended, setIsSended] = useState(false);

  const commands = data.map((item) => item.trim().split(' '));

  const {paint, paintForSave, isCanvasExist} = drawPaint(commands);

  const saveFile = async (paintForSave) => {
    await fetch(`http://localhost:5000/`, {
      method: `POST`,
      body: JSON.stringify({data: paintForSave}),
      headers: {'Content-Type': 'application/json'},
    }).then((res) => {
      if (res.ok === true) {
        setIsSended(true);
      }
    });
  };

  return (
    <div
      style={{
        margin: `0 auto`,
        width: `90%`,
        fontFamily: `Roboto`,
        backgroundColor: `inherit`,
      }}
    >
      <h3 style={{margin: `5px`, paddingTop: `10px`}}>Привет!</h3>
      <p style={{margin: `2px`}}>
        Эта программа рисует псевдографику, читая инструкции из файла
        /data/input.txt. Если вы сделали "npm i" в корне и в папке "client", а
        затем "npm run dev" в корне, вы уже видите внизу это произведение
        искусства. Сами вы тоже cможете рисовать такую красоту с помощью
        подобных инструкций, написав их в "input.txt". Команда "npm run dev"
        запустила 2 сервера (один express на backend, а второй на клиенте).
        Нажатие на кнопку сохранит ваш рисунок в /data/output.txt
      </p>
      <button
        style={{
          display: `block`,
          marginLeft: `auto`,
          marginTop: `5px`,
          marginBottom: `5px`,
          height: `2.5em`,
          backgroundColor: `rgb(221, 79, 155)`,
          border: 0,
          borderRadius: `3px`,
        }}
        onClick={() => saveFile(paintForSave)}
        disabled={isSended || !isCanvasExist}
      >
        {!isSended ? `Сохранить` : `Рисунок был сохранен в data/output.txt`}
      </button>
      <Canvas value={paint}></Canvas>
    </div>
  );
};

export default App;
