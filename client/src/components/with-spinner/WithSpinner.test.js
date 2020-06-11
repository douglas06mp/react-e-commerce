import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from './WithSpinner';
import Spinner from '../spinner/Spinner';

describe('WithSpinner Higher Oerder Component', () => {
  const MockComponent = () => <div />;
  const WrappedComponent = WithSpinner(MockComponent);

  describe('if loading is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<WrappedComponent isLoading={true} />);
    });

    it('should render Spinner component', () => {
      expect(wrapper.exists(Spinner)).toBeTruthy();
    });

    it('should not render mock component', () => {
      expect(wrapper.exists(MockComponent)).toBeFalsy();
    });
  });

  describe('if loading is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<WrappedComponent isLoading={false} />);
    });

    it('should render Spinner component', () => {
      expect(wrapper.exists(Spinner)).toBeFalsy();
    });

    it('should not render mock component', () => {
      expect(wrapper.exists(MockComponent)).toBeTruthy();
    });
  });
});
