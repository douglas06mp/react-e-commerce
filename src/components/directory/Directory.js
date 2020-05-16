import React, { Component } from 'react';
import '../category/Category';
import './Directory.scss';
import Category from '../category/Category';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'hats',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'jackets',
          id: 2,
        },
        {
          title: 'shoes',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'shoes',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkUrl: 'womens',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          linkUrl: 'mens',
          size: 'large',
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.category.map(({ id, ...category }) => (
          <Category key={id} {...category} />
        ))}
      </div>
    );
  }
}
