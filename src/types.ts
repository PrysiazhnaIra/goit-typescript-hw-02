export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
  };
  likes: number;
}

export interface ImageCardProps {
  image: UnsplashImage;
  openModal: (image: UnsplashImage) => void;
}

export interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (image: UnsplashImage) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  bigImage: string;
  imageDescription?: string | null;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}
