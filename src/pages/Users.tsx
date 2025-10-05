import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
}

const USERS_PER_PAGE = 2;

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
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

    // Pagination logic
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const paginatedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

    const goToPrevious = () => setCurrentPage((p) => Math.max(p - 1, 1));
    const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

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
                <>
                    <ul>
                        {paginatedUsers.map((user) => (
                            <li key={user.id}>
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))}
                    </ul>

                    {/* Pagination controls */}
                    <div style={{ marginTop: "1rem" }}>
                        <button onClick={goToPrevious} disabled={currentPage === 1}>
                            Previous
                        </button>{" "}
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>{" "}
                        <button onClick={goToNext} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Users;