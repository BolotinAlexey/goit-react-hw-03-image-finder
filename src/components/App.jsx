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
    status: '',
    isMore: false,
  };

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   const h = document.querySelector('body').scrollHeight;
  //   console.log(h);
  //   return h;
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(snapshot);
  //   document.querySelector('body').scrollTop = 0;

  // }

  componentDidUpdate(prevProps, { gallery }) {
    if (gallery.length !== this.state.gallery.length)
      console.log(document.querySelector('body').scrollHeight);
    window.scrollTo({
      top: document.querySelector('body').scrollHeight,
      behavior: 'smooth',
    });
  }

  isSomeMore = () => {
    console.log(this.state.totalHits);
    return this.state.gallery.length < this.state.totalHits;
  };

  handlerSubmit = async word => {
    this.setState({ status: 'load' });
    const currentGallery = word === this.state.word ? this.state.gallery : [];
    try {
      const { gallery, isMore } = await API.readData(
        word,
        Math.floor(currentGallery.length / PER_PAGE) + 1
      );

      console.log(gallery, isMore);
      this.setState({
        gallery: [...currentGallery, ...gallery],
        status: '',
        isMore,
        word,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        word: '',
        gallery: [],
        isLoading: false,
        isMore: false,
      });
    }
  };

  handlerMore = () => {
    console.log(this.state);
    this.handlerSubmit(this.state.word);
  };

  render() {
    const { gallery, isLoading, isMore, status } = this.state;
    return (
      <Wrap>
        {/* search bar */}
        <Searchbar onSubmit={this.handlerSubmit} isDisabled={isLoading} />

        {/* gallery list */}
        <ImageGallery gallery={gallery} />

        {/* loader */}
        {status === 'load' && <Loader />}

        {/* button 'Load more' */}
        {isMore && (
          <Button isDisabled={status === 'load'} onClick={this.handlerMore} />
        )}

        {/* modal */}
        {status === 'modal' && <Modal></Modal>}
      </Wrap>
    );
  }
}
export default App;
