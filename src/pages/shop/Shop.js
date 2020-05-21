import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import './Shop.scss';

const Shop = ({ match }) => {
  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={() => <CollectionOverview />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(routeProps) => <Collection {...routeProps} />}
      />
    </div>
  );
};

export default Shop;
