import { Li } from './ImageGalleryItem.styled';

function ImageGalleryItem({ itemData }) {
  const { tags, webformatURL } = itemData;
  // console.log(webformatURL);
  return (
    <Li>
      <img src={webformatURL} alt={tags} />
    </Li>
  );
}

export default ImageGalleryItem;
