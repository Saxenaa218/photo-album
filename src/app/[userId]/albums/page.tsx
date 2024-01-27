"use client";

import { useParams, useRouter } from "next/navigation";

import useAlbums from "@/hooks/useAlbums";
import { getInNumberFormat } from "@/lib";
import Image from "next/image";

const Albums = () => {
  const params = useParams();
  const router = useRouter();
  const userId = getInNumberFormat(params.userId);
  const { albums, error, isLoading } = useAlbums(userId);

  if (isLoading) return <div>Loading albums...</div>;
  if (error) return <div>Error loading albums</div>;

  return (
    <>
      <p className="mb-10 text-center text-3xl">
        Select an album to move forward!
      </p>
      <div className="flex flex-wrap gap-5">
        {albums?.map(({ title, id }) => (
          <div
            key={id}
            className="cursor-pointer p-3 hover:bg-blue-100 border border-blue-100 rounded-md flex flex-col items-center"
            onClick={() => router.push(`${id}`)}
          >
            <Image
              src="https://via.placeholder.com/150/7d35a7"
              alt="album thumbnail"
              width={150}
              height={150}
              className="rounded-md"
            />
            <span className="text-center text-wrap mt-2 max-w-[150px]">
              {title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Albums;
