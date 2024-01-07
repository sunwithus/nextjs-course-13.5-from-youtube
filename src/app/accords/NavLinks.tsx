import Link from "next/link";
import getAllAccordPages from "./api";

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
