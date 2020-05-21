import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection">
      <h2 className="collection--title">{title}</h2>
      <div className="collection--items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
