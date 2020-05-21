import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectories } from '../../redux/directory/directorySelector';
import Category from '../category/Category';
import './Directory.scss';

const Directory = ({ directories }) => {
  return (
    <div className="directory">
      {directories.map(({ id, ...category }) => (
        <Category key={id} {...category} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directories: selectDirectories,
});

export default connect(mapStateToProps)(Directory);
