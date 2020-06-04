import React, { memo } from 'react';
import { CartItemContainer, Image, Content } from './CartItem.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <Content>
        <span>{name}</span>
        <span>
          {quantity} &times; ${price}
        </span>
      </Content>
    </CartItemContainer>
  );
};

export default memo(CartItem);
