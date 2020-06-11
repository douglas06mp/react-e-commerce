import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectories } from '../../redux/directory/directorySelector';
import Category from '../category/Category';
import { DirectoryContainer } from './Directory.style';

export const Directory = ({ directories }) => {
  return (
    <DirectoryContainer>
      {directories.map(({ id, ...category }) => (
        <Category key={id} {...category} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  directories: selectDirectories,
});

export default connect(mapStateToProps)(Directory);
