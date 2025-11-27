import { useState } from "react";

type GalleryModalProps = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

export default function GalleryModal({ images, open, onClose }: GalleryModalProps) {

  if (!open || images.length === 0) return null;

  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
      >
        ✕
      </button>

      {/* PREV */}
      <button onClick={prevImage} className="absolute left-6 text-white text-4xl">
        ‹
      </button>

      {/* IMAGE */}
      <img
        src={images[index]}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-xl"
      />

      {/* NEXT */}
      <button onClick={nextImage} className="absolute right-6 text-white text-4xl">
        ›
      </button>

      {/* COUNTER */}
      <div className="absolute bottom-6 text-white text-lg">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
