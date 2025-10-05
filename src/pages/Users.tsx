import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2
  });

  if (isLoading) return <p>Loading users...</p>;

  if (isError)
    return (
      <div>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );

  return (
    <div>
      <h2>User List {isFetching && "(refreshing...)"}</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;