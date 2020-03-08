import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

Enzyme.configure({adapter: new Adapter()});

describe(`In App`, () => {
  const AppWrapper = mount(<App data={[`C 44 16, L 1 2 12 2`]} />);

  const buttonElement = AppWrapper.find(`button`);

  it(`exists button and element got right props`, () => {
    expect(buttonElement).toHaveLength(1);
    expect(AppWrapper.props().data).toEqual([`C 44 16, L 1 2 12 2`]);
  });
});
