import Link from 'next/link';

async function getAllAccordPages() {
  const query = `
    {
      pages(first: 1000, where: { orderby: { field: TITLE, order: ASC }, parentNotIn: "" }) {
        nodes {
          title
          slug
        }
      }
    }
  `;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { data } = await res.json();
  return data.pages.nodes;
}

type Page = {
  title: string;
  slug: string;
};

export default async function NavLinks() {
  const data = await getAllAccordPages();

  return (
    <>
      {data.map((link: Page) => (
        <Link key={link.slug} href={`/accords/${link.slug}`}>
          <p>{link.title}</p>
        </Link>
      ))}
    </>
  );
}
