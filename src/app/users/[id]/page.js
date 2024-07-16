async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return user;
}

export default async function User({ params: { id } }) {
  const user = await getUser(id);

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}
