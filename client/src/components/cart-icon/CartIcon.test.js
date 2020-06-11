import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleDropdown;
  beforeEach(() => {
    mockToggleDropdown = jest.fn();
    const mockProps = {
      itemCount: 0,
      toggleDropdown: mockToggleDropdown,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger toggleDropdown when clicked', () => {
    wrapper.find('#CartIcon').simulate('click');
    expect(mockToggleDropdown).toHaveBeenCalled();
  });

  it('should render ItemCount', () => {
    const itemCount = parseInt(wrapper.find('#Count').text());
    expect(itemCount).toBe(0);
  });
});
