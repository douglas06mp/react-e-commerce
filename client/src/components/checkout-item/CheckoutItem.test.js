import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem component', () => {
  let wrapper;
  let addItem;
  let removeItem;
  let clearItem;
  const mockItem = {
    name: 'name',
    imageUrl: 'imageUrl',
    price: 10,
    quantity: 5,
  };

  beforeEach(() => {
    addItem = jest.fn();
    removeItem = jest.fn();
    clearItem = jest.fn();

    const mockProps = {
      item: mockItem,
      addItem,
      removeItem,
      clearItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass imageUrl props to CheckoutItemImg as src prop', () => {
    expect(wrapper.find('#CheckoutItemImg').prop('src')).toBe(
      mockItem.imageUrl
    );
  });

  it('should trigger addItem with item as parameter when CheckoutItemAdd clicked', () => {
    wrapper.find('#CheckoutItemAdd').simulate('click');
    expect(addItem).toHaveBeenCalledWith(mockItem);
  });

  it('should trigger removeItem with item as parameter when CheckoutItemRemove clicked', () => {
    wrapper.find('#CheckoutItemRemove').simulate('click');
    expect(removeItem).toHaveBeenCalledWith(mockItem);
  });

  it('should trigger clearItem with item as parameter when CheckoutItemClear clicked', () => {
    wrapper.find('#CheckoutItemClear').simulate('click');
    expect(clearItem).toHaveBeenCalledWith(mockItem);
  });
});
