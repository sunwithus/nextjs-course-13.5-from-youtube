import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <Link href={`/accords`}>Аккорды к песням</Link>
    </>
  );
}
