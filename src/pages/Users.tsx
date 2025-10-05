import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface User{
    id: number;
    name: string;
    email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (cache.current) {
        console.log("Serving from cache...");
        setUsers(cache.current);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        cache.current = response.data; // ✅ cache result
      } catch (error) {
        setError("Failed to fetch users. Please try again later."); // ❌ set error state
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading users...</p>}

      {!loading && error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
