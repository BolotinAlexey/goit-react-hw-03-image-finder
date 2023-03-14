import { Btn } from './Button.styled';
function Button({ isDisabled }) {
  return <Btn disabled={isDisabled}>Load more</Btn>;
}

export default Button;
