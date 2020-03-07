import createRect from './create-rect'

test(`Passing command with rect's coords will produce canvas with rect inside`, () => {
  expect(createRect([`R`, `1`, `1`, `2`, `2`], [
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
      "-",
      "-",
      "-",
      "-"
    ]
  ])).toStrictEqual([
    [
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "|",
      "x",
      "x",
      "|"
    ],
    [
      "|",
      "x",
      "x",
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

test(`Passing command with too big coord still will produce canvas with rect inside, not outside`, () => {
  expect(createRect([`R`, `1`, `1`, `25`, `2`], [
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
      "-",
      "-",
      "-",
      "-"
    ]
  ])).toStrictEqual([
    [
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "|",
      "x",
      "x",
      "|"
    ],
    [
      "|",
      "x",
      "x",
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
