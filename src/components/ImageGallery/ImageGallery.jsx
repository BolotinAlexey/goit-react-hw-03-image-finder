import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
function ImageGallery({ gallery }) {
  return (
    <Ul>
      {gallery.map(el => {
        return <ImageGalleryItem key={el.id} itemData={el}></ImageGalleryItem>;
      })}
    </Ul>
  );
}

export default ImageGallery;
