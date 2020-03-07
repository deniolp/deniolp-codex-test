import createCanvasArray from './create-canvas-array'

test(`Passing width and height will produce empty canvas`, () => {
  expect(createCanvasArray(`2`, `3`)).toStrictEqual([
    [
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "|",
      " ",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      " ",
      "|"
    ],
    [
      "-",
      "-",
      "-",
      "-"
    ]
  ]);
});
