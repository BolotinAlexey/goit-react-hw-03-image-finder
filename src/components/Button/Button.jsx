import { Btn } from './Button.styled';
function Button({ isDisabled, onClick }) {
  return (
    <Btn disabled={isDisabled} onClick={onClick}>
      Load more
    </Btn>
  );
}

export default Button;
