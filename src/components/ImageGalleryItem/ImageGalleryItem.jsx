import { Li } from './ImageGalleryItem.styled';

function ImageGalleryItem({ itemData, onClikImg }) {
  const { tags, webformatURL, largeImageURL } = itemData;
  // console.log(webformatURL);
  return (
    <Li>
      <img
        onClick={() => onClikImg({ img: largeImageURL, alt: tags })}
        src={webformatURL}
        alt={tags}
      />
    </Li>
  );
}

export default ImageGalleryItem;
