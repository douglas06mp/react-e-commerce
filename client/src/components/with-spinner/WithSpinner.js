import React from 'react';
import Spinner from '../spinner/Spinner';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
};

export default WithSpinner;
