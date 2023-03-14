import { Component } from 'react';
import { Header } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.setState({ value: '' });
    // e.target.reset();
    this.props.onSubmit(e.target.elements[1].value);
  };

  onChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <Header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit" disabled={this.props.isDisabled}>
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </Header>
    );
  }
}
export default Searchbar;
