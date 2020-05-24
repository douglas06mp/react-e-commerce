import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.util.js';
import { setCollections } from '../../redux/shop/shopAction';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    isLoading: true,
  };

  unSubscribeSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      setCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={(routeProps) => (
            <CollectionOverviewWithSpinner
              isLoading={isLoading}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(routeProps) => (
            <CollectionWithSpinner isLoading={isLoading} {...routeProps} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { setCollections })(Shop);
