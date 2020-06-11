import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './CollectionItem';

describe('CollectionItem component', () => {
  let wrapper;
  let addItem;
  const mockItem = {
    name: 'name',
    imageUrl: 'imageUrl',
    price: 10,
  };

  beforeEach(() => {
    addItem = jest.fn();

    const mockProps = {
      item: mockItem,
      addItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger addItem with item as parameter when CollectionItemAdd clicked', () => {
    wrapper.find('#CollectionItemAdd').simulate('click');
    expect(addItem).toHaveBeenCalledWith(mockItem);
  });
});
