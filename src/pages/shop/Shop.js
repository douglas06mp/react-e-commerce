import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './shop.data';
import './Shop.scss';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection} />
        ))}
      </div>
    );
  }
}
