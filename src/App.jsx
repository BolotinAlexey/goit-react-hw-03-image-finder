import { Component } from 'react';

import * as API from './services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    gallery: [],
  };

  handlerSubmit = async word => {
    const reponseDate = await API.readData(word);

    this.setState(({ gallery }) => {
      return { gallery: [...gallery, ...reponseDate] };
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handlerSubmit} />
        {this.state.gallery.length}

        <ImageGallery gallery={this.state.gallery} />
        <Loader />
        <Button />
        <Modal></Modal>
      </div>
    );
  }
}
export default App;
