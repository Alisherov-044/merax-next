import { UserList } from "@/components/UsersList";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const users = await res.json();
  return users;
}

export default async function Fetching() {
  const users = await getUsers();

  return <UserList users={users} />;
}
