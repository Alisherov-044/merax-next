async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

export default async function sitemap() {
  const users = await getUsers();

  return [
    {
      url: "https://merax-next-two.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://merax-next-two.vercel.app/users",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...users.map((user) => ({
      url: `https://merax-next-two.vercel.app/users/${user.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      description: user.name,
      priority: 0.9,
    })),
  ];
}
