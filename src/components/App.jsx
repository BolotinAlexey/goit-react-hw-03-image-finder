import { Component } from 'react';
import { Wrap } from 'components/App.styled.js';

import { PER_PAGE } from 'services/constants';
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
    totalHits: 0,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   first;
  // }
  isSomeMore = () => {
    return PER_PAGE * this.state.page < this.state.gallery.totalHits;
  };

  handlerSubmit = async word => {
    this.setState({ isLoading: true });
    const reponseDate = await API.readData(word, this.state.page);

    this.setState(({ gallery, totalHits }) => {
      return { gallery: [...gallery, ...reponseDate.hits], isLoading: false };
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
        {this.isSomeMore() && <Button isDisabled={isLoading} />}

        {/* modal */}
        <Modal></Modal>
      </Wrap>
    );
  }
}
export default App;
