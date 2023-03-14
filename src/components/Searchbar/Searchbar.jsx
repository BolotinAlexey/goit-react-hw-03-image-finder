import { Component } from 'react';

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
      <header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
