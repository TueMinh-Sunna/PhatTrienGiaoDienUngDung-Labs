import React, { useEffect, useState } from "react";

function UserById() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId === "") return;

    const id = Number(userId);
    if (id < 1 || id > 10) {
      setUser(null);
      setError("User not found");
      return;
    }

    const fetchUser = async () => {
      try {
        setError(null);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
        setError("User not found");
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID (1-10)"
      />

      {error && <p>{error}</p>}

      {user && (
        <div>
          <div>{user.name}</div>
          <div>{user.phone}</div>
          <div>{user.website}</div>
        </div>
      )}
    </div>
  );
}

export default UserById;
