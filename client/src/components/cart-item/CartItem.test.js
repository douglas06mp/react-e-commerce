import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

describe('CartItem component', () => {
  it('should render CartItem component', () => {
    const mockItem = {
      imageUrl: 'url',
      price: 100,
      name: 'mock',
      quantity: 4,
    };

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });
});
