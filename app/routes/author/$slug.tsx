import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Author, Piece, Image, Corpus } from "client";
import { PrismaClient } from "client";

interface ILoaderData {
  author: (Author & {
    pieces: Piece[];
    cover: Image;
  }) | null,
  corpora: (Corpus | null)[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const client = new PrismaClient();
  const author = await client.author.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      pieces: true,
      cover: true
    }
  });
  const corpora = (await Promise.all(await client.corpusAuthor.findMany({
    where: { authorId: author?.id },
    include: {corpus: true}
  }).then(res => res.map((corpus) => client.corpus.findUnique({ where: { id: corpus.corpusId } })))))

  json({
    author, 
    corpora
  })
}

export default function Index() {
  const {author} = useLoaderData<ILoaderData>();
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
