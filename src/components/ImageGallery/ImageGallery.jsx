import ImageGalleryItem from 'component/ImageGalleryItem/ImageGalleryItem';
function ImageGallery({ gallery }) {
  return (
    <ul>
      {gallery.map(el => {
        return <ImageGalleryItem key={el.id} data={el}></ImageGalleryItem>;
      })}
    </ul>
  );
}
