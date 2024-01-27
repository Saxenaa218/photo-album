"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import useAlbumPhotos from "@/hooks/useAlbumPhotos";
import { getInNumberFormat } from "@/lib";

const Album = () => {
  const params = useParams();
  const userId = getInNumberFormat(params.userId);
  const albumId = getInNumberFormat(params.albumId);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { photos, error, isLoading } = useAlbumPhotos(userId, albumId);

  if (isLoading) return <div>Loading photos...</div>;
  if (error) return <div>Error loading photos</div>;

  const navigate = (direction: "prev" | "next") => {
    if (selectedIndex !== null) {
      const newIndex =
        direction === "next" ? selectedIndex + 1 : selectedIndex - 1;

      if (photos && newIndex >= 0 && newIndex < photos.length) {
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-5">
      {photos?.map(({ id, thumbnailUrl, title }, index) => (
        <Image
          key={id}
          className="cursor-pointer rounded-md"
          src={thumbnailUrl}
          alt={title}
          width={150}
          height={150}
          onClick={() => setSelectedIndex(index)}
        />
      ))}

      {selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="text-white absolute top-1/2 left-4"
            onClick={() => navigate("prev")}
          >
            Previous
          </button>
          <Image
            src={photos[selectedIndex].url}
            alt={photos[selectedIndex].title}
            className="max-h-80vh max-w-full"
            width={500}
            height={500}
          />
          <button
            className="text-white absolute top-1/2 right-4"
            onClick={() => navigate("next")}
          >
            Next
          </button>
          <button
            className="text-white absolute top-4 right-4"
            onClick={() => setSelectedIndex(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Album;
