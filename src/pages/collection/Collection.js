import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { CollectionContainer, Title, Items } from './Collection.style';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
