import { useEffect, useState } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";
import { UnsplashImage } from "../../types";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  useEffect(() => {
    if (!query) return;

    async function fetchImages(): Promise<void> {
      try {
        setLoading(true);
        const response = await axios.get<{ results: UnsplashImage[] }>(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              orientation: "landscape",
              query,
              page,
              client_id: "iB5AgNQ2CEuOiViT6IK8Ly0JMDb3rSWRZ7nt2ojq3AU",
            },
          }
        );
        console.log(response);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    setQuery((prevQuery) => {
      if (searchQuery != prevQuery) {
        setPage(1);
        setImages([]);
      }
      return searchQuery;
    });
  };

  const loadMoreImages = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: UnsplashImage): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-left" reverseOrder={false} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          bigImage={selectedImage.urls.regular}
          imageDescription={selectedImage.alt_description}
          onClose={closeModal}
        />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
    </>
  );
}

export default App;
