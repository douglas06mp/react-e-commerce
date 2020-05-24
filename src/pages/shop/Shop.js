import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction';
import {
  selectIsFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shopSelector';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import WithSpinner from '../../components/with-spinner/WithSpinner';
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={(routeProps) => (
            <CollectionOverviewWithSpinner
              isLoading={!isCollectionsLoaded}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(routeProps) => (
            <CollectionWithSpinner
              isLoading={!isCollectionsLoaded}
              {...routeProps}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
