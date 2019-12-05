import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.action";
import {
  AddToCartButton,
  CollectionItemContainer,
  CollectionFooter,
  Name,
  Price,
  CartImage
} from "./collection-item.styles.js";

export const CollectionItemComponent = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CartImage style={{ backgroundImage: `url(${imageUrl})` }}>
        <AddToCartButton inverted onClick={() => addToCart(item)}>
          Add to cart
        </AddToCartButton>
      </CartImage>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
    </CollectionItemContainer>
  );
};

const dispatchToProps = dispatch => ({
  addToCart: item => dispatch(addItemToCart(item))
});

export const CollectionItem = connect(
  null,
  dispatchToProps
)(CollectionItemComponent);
