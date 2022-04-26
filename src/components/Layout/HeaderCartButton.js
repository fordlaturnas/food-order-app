import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

// received props from Header.js { onClickCart }
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
