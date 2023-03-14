import { Component } from 'react';
import { Wrap } from 'components/App.styled.js';

import * as API from '../services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    gallery: [],
    isLoading: false,
    page: 1,
  };

  handlerSubmit = async word => {
    this.setState({ isLoading: true });
    const reponseDate = await API.readData(word);

    this.setState(({ gallery, isLoading }) => {
      return { gallery: [...gallery, ...reponseDate], isLoading: false };
    });
  };

  render() {
    const { gallery, isLoading } = this.state;
    return (
      <Wrap>
        {/* search bar */}
        <Searchbar onSubmit={this.handlerSubmit} isDisabled={isLoading} />

        {/* gallery list */}
        <ImageGallery gallery={gallery} />

        {/* loader */}
        {isLoading && <Loader />}

        {/* button 'Load more' */}
        {!isLoading && <Button />}

        {/* modal */}
        <Modal></Modal>
      </Wrap>
    );
  }
}
export default App;
