import { use } from 'react';

const fetchData = () =>
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'force-cache',
  }).then((response) => response.json());

export default async function DashboardPage() {
  const data = await fetchData();
  return (
    <div>
      <h1>
        {data.id} + {data.title}
      </h1>
    </div>
  );
}
