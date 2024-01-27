import useSWR from "swr";

export interface Album {
  userId: number;
  id: number;
  title: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useAlbums = (userId: number) => {
  const { data: albums, error } = useSWR<Album[]>(
    userId
      ? `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      : null,
    fetcher
  );

  return {
    albums,
    error,
    isLoading: !albums && !error,
  };
};

export default useAlbums;
