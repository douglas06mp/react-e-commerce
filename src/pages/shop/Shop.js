import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.util.js';
import { setCollections } from '../../redux/shop/shopAction';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

class Shop extends Component {
  unSubscribeSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      setCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

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
  }
}

export default connect(null, { setCollections })(Shop);
