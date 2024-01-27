import useSWR from "swr";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useAlbumPhotos = (userId: number, albumId: number) => {
  const { data: photos, error } = useSWR<Photo[]>(
    userId && albumId
      ? `https://jsonplaceholder.typicode.com/photos?userId=${userId}&albumId=${albumId}&_limit=500`
      : null,
    fetcher
  );

  return {
    photos: photos || [],
    error,
    isLoading: !photos && !error,
  };
};

export default useAlbumPhotos;
