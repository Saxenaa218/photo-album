import Image from "next/image";
import React, { useState } from "react";

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface PhotoListProps {
  photos: Photo[];
}

const ImageViewer: React.FC<PhotoListProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSelectedIndex(null);
  };

  const navigate = (direction: "prev" | "next") => {
    if (selectedIndex !== null) {
      const newIndex =
        direction === "next" ? selectedIndex + 1 : selectedIndex - 1;

      if (newIndex >= 0 && newIndex < photos.length) {
        setSelectedPhoto(photos[newIndex]);
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="cursor-pointer relative"
          onClick={() => openModal(photo, index)}
        >
          <Image
            src={photo.url}
            alt={photo.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="text-white text-lg">View</span>
          </div>
        </div>
      ))}

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="text-white absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={() => navigate("prev")}
          >
            Previous
          </button>
          <Image
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
            className="max-h-80vh max-w-full"
          />
          <button
            className="text-white absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={() => navigate("next")}
          >
            Next
          </button>
          <button
            className="text-white absolute top-4 right-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
