//we use reslect becuause we dont want to render all state even when only some state changes..
import { createSelector } from "reselect";

//state value is automaitcally passed while using createStructuredSelector -> look into app.js
//input selectors
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedPrice, cartItem) =>
      accumalatedPrice + cartItem.price * cartItem.quantity,
    0
  )
);
