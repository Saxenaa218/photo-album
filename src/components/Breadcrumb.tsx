import Link from "next/link";
import { useParams } from "next/navigation";
import { getInNumberFormat } from "@/lib";

const Breadcrumb = () => {
  const params = useParams();

  return (
    <div>
      <Link className="hover:underline" href="/">
        all-users
      </Link>
      {params.userId && (
        <>
          &nbsp; / &nbsp;
          <Link
            className="hover:underline"
            href={`/${getInNumberFormat(params.userId)}/albums`}
          >
            user={params.userId}
          </Link>
        </>
      )}

      {params.userId && params.albumId && (
        <>
          &nbsp; / &nbsp;
          <Link
            className="hover:underline"
            href={`/${getInNumberFormat(params.userId)}/${getInNumberFormat(
              params.albumId
            )}`}
          >
            album={params.albumId}
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
