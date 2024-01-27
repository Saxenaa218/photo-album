"use client";

import Link from "next/link";

import UserAvatar from "@/components/UserAvatar";
import useAllUsers from "@/hooks/userAllUsers";

const Users = () => {
  const { users, isLoading, error } = useAllUsers();

  if (error) return <div>Error loading users</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <p className="mb-10 text-center text-3xl">
        Select a user to move forward!
      </p>
      <div className="flex gap-3 flex-wrap">
        {users?.map(({ username, email, id }) => (
          <Link href={`${id}/albums`} key={id}>
            <UserAvatar userName={username} email={email} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
