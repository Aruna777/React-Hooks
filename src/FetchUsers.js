import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Users
      </h1>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="text-lg font-medium hover:text-blue-500 transition"
          >
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FetchUsers;
