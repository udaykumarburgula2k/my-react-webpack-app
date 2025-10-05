import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<User[] | null>(null);

  const fetchUsers = useCallback(async () => {
    if (cache.current) {
      console.log("Serving from cache...");
      setUsers(cache.current);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null); // Reset previous error

    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      cache.current = response.data; // cache the result
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading users...</p>}

      {!loading && error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchUsers}>Retry</button> {/* ✅ Retry button */}
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