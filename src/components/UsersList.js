"use client";

import { useEffect, useState } from "react";

export function UserList({ users }) {
  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUser] = useState(users);

  useEffect(() => {
    const res = users.filter((user) => user.name.includes(search));
    setFilteredUser(res);
  }, [search]);

  return (
    <div>
      <input
        placeholder="search users"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUser.map((user) => (
          <span key={user.name} className="block">
            {user.name}
          </span>
        ))}
      </ul>
    </div>
  );
}
