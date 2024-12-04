import React, { useState, useEffect } from "react";

function UserFetcher() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700 font-semibold">Select User ID:</span>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </label>
      {user && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            User Details:
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserFetcher;
