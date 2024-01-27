import useSWR from "swr";
import { User } from "@/types/user";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useAllUsers = () => {
  const { data: users, error } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    users,
    error,
    isLoading: !users && !error,
  };
};

export default useAllUsers;
