import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "../../types";

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  if (!images.length) return <p>No images found.</p>;

  return (
    <ul className={css.listImage}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}
