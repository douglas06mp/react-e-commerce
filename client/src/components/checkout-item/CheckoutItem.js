import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cartAction';
import {
  CheckoutItemContainer,
  ImageBox,
  Info,
  Quantity,
  RemoveButton,
} from './CheckoutItem.style';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageBox>
        <img src={imageUrl} alt="item" />
      </ImageBox>
      <Info>{name}</Info>
      <Quantity>
        <span onClick={() => removeItem(item)}>&#10094;</span>
        <span>{quantity}</span>
        <span onClick={() => addItem(item)}>&#10095;</span>
      </Quantity>
      <Info>${price}</Info>
      <RemoveButton onClick={() => clearItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default connect(null, { addItem, removeItem, clearItem })(CheckoutItem);
