import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPreview } from './CollectionPreview';

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'routeName';

  beforeEach(() => {
    mockMatch = { path: 'matchPath' };
    mockHistory = { push: jest.fn() };

    const mockProps = {
      title: 'title',
      items: [],
      routeName: mockRouteName,
      match: mockMatch,
      history: mockHistory,
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history push when CollectionPreviewTitle clicked', () => {
    wrapper.find('#CollectionPreviewTitle').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});
