import Link from "next/link";
import { useRouter } from "next/router";
import Container from "components/Container";

import Search from "components/Search";
import Meta from "components/Meta";

import seo from "src/seo";

export default function SeoPage() {
  const router = useRouter();
  const { slug } = router.query;

  const page = seo[slug];
  if (!page) return 404;

  const { title, regex } = page;
  console.log({ title, regex });

  return (
    <Container>
      <Meta
        title={title}
        description="Regular expression dictionary word search to find words containing certain letters by Christian Genco"
      />
      <main>
        <h1 className="mt-4 text-6xl font-bold">{title}</h1>
        <h2 className="text-2xl">
          <Link href="/" className="hover:underline text-blue-500">
            regexdictionary.com
          </Link>{" "}
          by{" "}
          <a
            className="hover:underline text-blue-500"
            href="https://christian.gen.co"
          >
            Christian Genco
          </a>
        </h2>
        <Search defaultRegex={regex} />
      </main>
    </Container>
  );
}