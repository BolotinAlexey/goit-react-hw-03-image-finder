import { Overlay, ModalStyle } from './Modal.styled';
function Modal({ source }) {
  return (
    <Overlay className="overlay">
      <ModalStyle className="modal">
        <img src={source.img} alt={source.alt} />
      </ModalStyle>
    </Overlay>
  );
}
export default Modal;
