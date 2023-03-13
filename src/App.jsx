import Searchbar from 'components/Searchbar/Searchbar';
import { Component } from 'react';

class App extends Component {
  handlerSubmit = e => {
    e.preventDefault();
    console.dir(e.target.elements[1].value);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handlerSubmit} />
      </div>
    );
  }
}
export default App;
