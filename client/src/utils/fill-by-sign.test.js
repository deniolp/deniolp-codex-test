import fillBySign from './fill-by-sign';

test(`Passing command with coords (where to start fill) and sign will fill canvas by sign`, () => {
  expect(
    fillBySign(
      [`B`, `2`, `2`, `o`],
      [
        ['-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-'],
      ],
    ),
  ).toStrictEqual([
    ['-', '-', '-', '-', '-', '-'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['-', '-', '-', '-', '-', '-'],
  ]);
});

test(`Passing command with coords (where to start fill) and sign to canvas with already existed rect will fill canvas by sign outside the rect`, () => {
  expect(
    fillBySign(
      [`B`, `3`, `3`, `o`],
      [
        ['-', '-', '-', '-', '-', '-'],
        ['|', 'x', 'x', ' ', ' ', '|'],
        ['|', 'x', 'x', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-'],
      ],
    ),
  ).toStrictEqual([
    ['-', '-', '-', '-', '-', '-'],
    ['|', 'x', 'x', 'o', 'o', '|'],
    ['|', 'x', 'x', 'o', 'o', '|'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['|', 'o', 'o', 'o', 'o', '|'],
    ['-', '-', '-', '-', '-', '-'],
  ]);
});
