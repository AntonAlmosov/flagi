import type { LoaderFunction } from "@remix-run/node";
import { prisma, PrismaClient } from "client";

export const loader: LoaderFunction = async ({ params }) => {
  const client = new PrismaClient();
  const authors = await client.author.findMany({
    include: {
      pieces: true,
      cover: true
    }
  });
  const corpora = (await Promise.all(await client.corpusAuthor.findMany({
    where: { authorId: authors[0].id },
    include: {corpus: true}
  }).then(res => res.map((corpus) => client.corpus.findUnique({ where: { id: corpus.corpusId } })))))
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
