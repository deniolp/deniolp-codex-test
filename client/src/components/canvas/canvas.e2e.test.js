import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Canvas from './canvas';

Enzyme.configure({adapter: new Adapter()});

describe(`In Canvas`, () => {
  const CanvasWrapper = shallow(<Canvas
    value={`This is a value`}
  />);

  it(`element got right props`, () => {
    expect(CanvasWrapper.props().value).toEqual(`This is a value`);
  });
});
