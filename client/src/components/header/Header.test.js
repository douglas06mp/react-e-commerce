import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import CartDropdown from '../cart-dropdown/CartDropdown';

describe('Header component', () => {
  let wrapper;
  let mockSignOut;
  beforeEach(() => {
    mockSignOut = jest.fn();

    const mockProps = {
      user: { uid: '1' },
      hidden: true,
      signOutStart: mockSignOut,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if user exists', () => {
    it('should display sign out link', () => {
      expect(wrapper.find('HeaderLink').at(2).text()).toBe('LOG OUT');
    });

    it('should trigger signOutStart when clicked', () => {
      wrapper.find('HeaderLink').at(2).simulate('click');
      expect(mockSignOut).toHaveBeenCalled();
    });
  });

  describe('if user does not exist', () => {
    it('should render sign in link', () => {
      const mockProps = {
        user: null,
        hidden: true,
        signOutStart: mockSignOut,
      };
      expect(
        shallow(<Header {...mockProps} />)
          .find('HeaderLink')
          .at(2)
          .text()
      ).toBe('LOG IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown component', () => {
      expect(wrapper.exists(CartDropdown)).toBeFalsy();
    });
  });

  describe('if hidden is false', () => {
    it('should render CartDropdown component', () => {
      const mockProps = {
        user: null,
        hidden: false,
        signOutStart: mockSignOut,
      };

      expect(
        shallow(<Header {...mockProps} />).exists(CartDropdown)
      ).toBeTruthy();
    });
  });
});
