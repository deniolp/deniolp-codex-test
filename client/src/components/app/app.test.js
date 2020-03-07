import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

describe(`App`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <App data={[`C 44 16, L 1 2 12 2`]}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
