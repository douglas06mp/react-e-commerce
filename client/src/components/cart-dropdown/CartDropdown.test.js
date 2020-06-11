import React from 'react';
import { shallow } from 'enzyme';
import { CartDropdown } from './CartDropdown';
import CartItem from '../cart-item/CartItem';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockToggleDropdown;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = { push: jest.fn() };
    mockToggleDropdown = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      toggleDropdown: mockToggleDropdown,
    };
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger push history and toggleDropdown when button clicked', () => {
    wrapper.find('#CheckoutButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockToggleDropdown).toHaveBeenCalled();
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render Empty message if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      toggleDropdown: mockToggleDropdown,
    };

    const wrapper = shallow(<CartDropdown {...mockProps} />);
    expect(wrapper.find('#EmptyMessage').exists()).toBe(true);
  });
});
