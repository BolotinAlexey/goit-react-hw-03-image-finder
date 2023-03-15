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
    word: '',
    gallery: [],
    isLoading: false,

    totalHits: 0,
  };

  // componentDidUpdate(prevProps, { gallery, word }) {
  //   if (word !== this.state.word) this.setState({ gallery: [], totalHits: 0 });
  // }

  isSomeMore = () => {
    console.log(this.state.totalHits);
    return this.state.gallery.length < this.state.totalHits;
  };

  handlerSubmit = async word => {
    this.setState({ isLoading: true });
    const currentGallery = word === this.state.word ? this.state.gallery : [];
    // if (word !== this.state.word) {this.setState({ gallery:[], word });}

    const responseDate = await API.readData(
      word,
      Math.floor(currentGallery.length / PER_PAGE) + 1
    );

    this.setState({
      gallery: [...currentGallery, ...responseDate.hits],
      isLoading: false,
      totalHits: responseDate.totalHits,
      word,
    });
  };

  handlerMore = () => {
    console.log(this.state);
    this.handlerSubmit(this.state.word);
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
        {this.isSomeMore() && (
          <Button isDisabled={isLoading} onClick={this.handlerMore} />
        )}

        {/* modal */}
        <Modal></Modal>
      </Wrap>
    );
  }
}
export default App;
