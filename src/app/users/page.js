import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

export default async function Users() {
  const users = await getUsers();
  console.log(users);

  return (
    <h1>
      {users.map((user) => (
        <Link key={user.id} className="block" href={`/users/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </h1>
  );
}
