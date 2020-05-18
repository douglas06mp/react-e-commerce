import React, { Component } from 'react';
import Category from '../category/Category';
import DIRECTORY_DATA from './directory.data';
import './Directory.scss';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      category: DIRECTORY_DATA,
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
