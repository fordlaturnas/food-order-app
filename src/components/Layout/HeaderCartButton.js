import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-contex';
import classes from './HeaderCartButton.module.css';

// received props from Header.js { onClickCart }
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // recduce(param1, param2)
  // param1 -- (paramA, paramB) => {}
  // param2 -- starting value
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
