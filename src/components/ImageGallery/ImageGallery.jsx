import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
function ImageGallery({ gallery }) {
  return (
    <ul>
      {gallery.map(el => {
        return <ImageGalleryItem key={el.id} data={el}></ImageGalleryItem>;
      })}
    </ul>
  );
}

export default ImageGallery;
