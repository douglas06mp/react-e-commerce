import React from 'react';
import { shallow } from 'enzyme';
import { Category } from './Category';

describe('Category component', () => {
  let wrapper;
  let mockHistory;
  const match = {
    url: 'matchUrl',
  };
  const linkUrl = 'linkUrl';
  const imageUrl = 'imageUrl';
  const size = 'large';

  beforeEach(() => {
    mockHistory = { push: jest.fn() };
    const mockProps = {
      title: 'title',
      imageUrl,
      size,
      linkUrl,
      match,
      history: mockHistory,
    };

    wrapper = shallow(<Category {...mockProps} />);
  });

  it('should render Category component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger history push when Category clicked', () => {
    wrapper.find('#Category').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${match.url}${linkUrl}`);
  });

  it('should pass size prop to Category as the prop size', () => {
    expect(wrapper.find('#Category').prop('size')).toBe(size);
  });

  it('should pass imageUrl prop to CategoryBackground as the prop imageUrl', () => {
    expect(wrapper.find('#CategoryBackground').prop('imageUrl')).toBe(imageUrl);
  });
});
