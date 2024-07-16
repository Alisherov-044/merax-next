"use client";

import { useEffect, useState } from "react";

export function SearchUsers({ users }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    users.filter((user) => user.name.includes(search));
  }, [search]);

  return (
    <div>
      <input
        placeholder="search users"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
