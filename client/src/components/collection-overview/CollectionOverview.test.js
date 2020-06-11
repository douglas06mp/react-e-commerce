import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './CollectionOverview';

describe('CollectionOverview component', () => {
  it('should render CollectionOverview component', () => {
    expect(shallow(<CollectionOverview collections={[]} />));
  });
});
