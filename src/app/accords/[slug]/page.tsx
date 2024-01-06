/*export const dynamic = 'force-static';
export const dynamicParams = false;*/
import { checkFields, Diff, OmitWithTag } from "next-typed-pages";

export async function getAllAccordPages(): Promise<
  { title: string; slug: string }[]
> {
  const query = `
    {
      pages(first: 1000, where: { orderby: { field: TITLE, order: ASC }, parentNotIn: "" }) {
        nodes {
          slug
        }
      }
    }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await res.json();

  if (data && data.pages && Array.isArray(data.pages.nodes)) {
    return data.pages.nodes;
  } else {
    throw new Error("Invalid response structure from GraphQL");
  }
}

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

  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    throw new Error("GraphQL endpoint is not defined.");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();
  console.log(responseBody);

  if (responseBody && responseBody.data && responseBody.data.page) {
    return responseBody.data.page;
  } else {
    throw new Error("Failed to fetch the page");
  }
}

//export default async function PageDetails() {
export default async function PageDetails({
  params,
}: {
  params: { slug: string };
}) {
  //const page = await getPage({ slug: 'ya-v-dele' });
  const page = await getPage(params);
  console.log(params);

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

  posts.map((post: { slug: string }) => console.log(post.slug));

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

/*
export async function generateStaticParams() {
  const result = await getAllAccordPages();
  const props = result.props;

  if (props && props.children && Array.isArray(props.children)) {
    const accordPages = props.children;

    return {
      paths: accordPages.map((link: { key: string }) => `/accords/${link.key}`) || [],
    };
  } else {
    // Обработка случая, когда структура данных не соответствует ожидаемой
    console.error('Invalid structure in getAllAccordPages result');
    return {
      paths: [],
      fallback: false,
    };
  }
};

/*

// `app` directory
import PostLayout from '@/components/post-layout'
 
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}
 
async function getPost(params) {
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()
 
  return post
}
 
export default async function Post({ params }) {
  const post = await getPost(params)
 
  return <PostLayout post={post} />
}

*/
