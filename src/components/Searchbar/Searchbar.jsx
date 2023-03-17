import { Component } from 'react';
import { Header } from './Searchbar.styled';
// import { FaSearch, FaRegWindowClose } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    value: '',
  };

  visibleHandler = () => (this.state.value ? 1 : 0.2);

  onReset = () => this.setState({ value: '' });

  handlerSubmit = e => {
    e.preventDefault();
    // this.setState({ value: '' });
    // e.target.reset();
    const word = e.target.elements[1].value.trim();
    if (word) this.props.onSubmit(word);
  };

  onChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    return (
      <Header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit" disabled={this.props.isDisabled}>
            {/* <FaSearch size={20} className="icon" /> */}
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={value}
          />

          {/* <button onClick={this.onReset} type="reset">
            <FaRegWindowClose
              className="icon"
              size={20}
              color={value ? 'red' : 'transparent'}
            />
          </button> */}
        </form>
      </Header>
    );
  }
}
export default Searchbar;