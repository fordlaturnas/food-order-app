import classes from './Backdrop.module.css';

// received props from Modal.js { onCloseCart }
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

export default Backdrop;
