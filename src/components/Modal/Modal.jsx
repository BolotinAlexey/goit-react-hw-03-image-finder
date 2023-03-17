import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalStyle } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClose);
  }

  onClose = e => {
    if (e.code === 'Escape') this.props.closeWindow();
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay>
        <ModalStyle>{children}</ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;