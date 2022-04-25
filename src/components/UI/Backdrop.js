import classes from './Backdrop.module.css';

// received props from Modal.js { onClose }
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;
