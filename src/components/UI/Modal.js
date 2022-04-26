import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('overlays');

// received props from Cart.js { onCloseCart }
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
