import {drawPaint} from './draw-paint';

const paint = `------
|xxoo|
|xxoo|
|oooo|
|oxxo|
------
`;
const paintForSave = `------
|    |
|    |
|    |
|    |
------
------
|    |
|    |
|    |
| xx |
------
------
|xx  |
|xx  |
|    |
| xx |
------
------
|xxoo|
|xxoo|
|oooo|
|oxxo|
------
`;

test(`Passing series of commands will return object with proper things`, () => {
  expect(drawPaint([
    [
      "C",
      "4",
      "4"
    ],
    [
      "L",
      "2",
      "4",
      "3",
      "4"
    ],
    [
      "R",
      "1",
      "1",
      "2",
      "2"
    ],
    [
      "B",
      "3",
      "3",
      "o"
    ],
    [],
  ])
).toStrictEqual({paint, paintForSave, isCanvasExist: true})});
