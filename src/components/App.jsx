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
    if (this.state.gallery.length === 0) window.scrollTo({ top: 0 });
    if (gallery.length !== this.state.gallery.length)
      window.scrollTo({
        top: document.querySelector('body').scrollHeight,
        behavior: 'smooth',
      });
  }

  // isSomeMore = () => {
  //   console.log(this.state.totalHits);
  //   return this.state.gallery.length < this.state.totalHits;
  // };

  requestToApi = async (word, currentGallery) => {
    this.setState({ status: 'load' });
    try {
      const { reqGallery, isMore } = await API.readData(
        word,
        Math.floor(currentGallery.length / PER_PAGE) + 1
      );

      console.log(reqGallery, isMore);
      this.setState({
        gallery: [...currentGallery, ...reqGallery],
        status: '',
        isMore,
        word,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        word: '',
        gallery: [],
        status: '',
        isMore: false,
      });
    }
  };

  handlerSubmit = word => {
    this.setState({
      word,
      gallery: [],
      status: 'load',
    });

    this.requestToApi(word, []);

    // const currentGallery =
    //   word === this.state.word && this.state.isMore ? this.state.gallery : [];
  };

  handlerMore = () => {
    console.log(this.state);
    this.requestToApi(this.state.word, this.state.gallery);
  };

  render() {
    const { gallery, isMore, status } = this.state;
    return (
      <Wrap>
        {/* search bar */}
        <Searchbar onSubmit={this.handlerSubmit} isDisabled={status} />
        {/* gallery list */}
        <ImageGallery gallery={gallery} />
        {/* loader */}
        <Loader visible={status === 'load'} />
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
