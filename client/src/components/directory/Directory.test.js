import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './Directory';

describe('Directory component', () => {
  it('should render Directory component', () => {
    expect(shallow(<Directory directories={[]} />)).toMatchSnapshot();
  });
});
