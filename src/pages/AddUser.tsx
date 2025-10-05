import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setError(null);

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                name,
                email
            });

            console.log("✅ Response:", response.data);
            setStatus("success");
            setName("");
            setEmail("");
        } catch (err: any) {
            console.error("❌ Error:", err);
            setError("Failed to add user");
            setStatus("error");
        }
    };

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Adding..." : "Add User"}
                </button>
            </form>

            {status === "success" && <p style={{ color: "green" }}>User added successfully!</p>}
            {status === "error" && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default AddUser;
