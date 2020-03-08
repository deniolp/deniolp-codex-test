import React from 'react';
import renderer from 'react-test-renderer';

import Canvas from './canvas';

describe(`Canvas`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Canvas value={`This is a value`} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
