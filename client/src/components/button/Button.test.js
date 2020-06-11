import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button component', () => {
  it('should render Button component', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });
});
