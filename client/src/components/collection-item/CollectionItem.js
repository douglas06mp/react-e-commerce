import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
import Button from '../button/Button';
import {
  CollectionItemContainer,
  BackgroundImg,
  Footer,
  Name,
  Price,
} from './CollectionItem.style';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImg imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button onClick={() => addItem(item)} invert>
        ADD TO CART
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
