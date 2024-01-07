import getAllAccordPages from "../api";

async function getPage(params: { slug: string }) {
  const query = `
    query getPageBySlug($slug: String) {
      page: pageBy(uri: $slug) {
        title,
        content
      } 
    }
  `;

  const variables = { slug: params.slug };

  const endpoint = process.env.WORDPRESS_API_URL;

  if (!endpoint) {
    throw new Error("GraphQL endpoint is not defined.");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.page) {
    return responseBody.data.page;
  } else {
    throw new Error("Failed to fetch the page");
  }
}

export default async function PageDetails({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPage(params);
  return (
    <>
      <h1>{page.title}</h1>
      <div key={page.slug}>
        <p dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllAccordPages();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
