type imageUrl = string;
type GalleryProps = {
  images: imageUrl[];
}
export default function Gallery({images}: GalleryProps) {
  console.log(images);
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <div className="property__image-wrapper" key={image}>
          <img
            className="property__image"
            src={image}
            alt="Property"
          />
        </div>))}
    </div>
  );
}
