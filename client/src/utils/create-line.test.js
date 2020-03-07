import createLine from './create-line'

test(`Passing Line command and empty canvas to createLine will produce canvas with line`, () => {
  expect(createLine([`L`, `1`, `2`, `2`, `2`], [
    [
      "-",
      "-",
      "-"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "-",
      "-",
      "-"
    ]
  ])).toStrictEqual([
    [
      "-",
      "-",
      "-"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "|",
      "x",
      "|"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "|",
      " ",
      "|"
    ],
    [
      "-",
      "-",
      "-"
    ]
  ]);
});

test(`Passing Line command with too big number will produce line only inside of canvas`, () => {
  expect(createLine([`L`, `1`, `2`, `12`, `2`], [
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
  ])).toStrictEqual([
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
      "x",
      "x",
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

test(`Passing command with not equal x's or y's will return proper error`, () => {
  expect(createLine([`L`, `1`, `2`, `2`, `3`], [
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
  ])).toStrictEqual(`Error: it should be line`);
});
