"use client";
import useSWR from "swr";
import { fetcher } from "./_lib/utils";
import Image from "next/image";

export default function Home() {
  const request = {
    query: `
      query ($perPage: Int) {
        Page(perPage: $perPage) {
          pageInfo {
            perPage
          }
          media {
            id
            coverImage {
                large 
            }
            title {
              romaji
              english
              native
            }
          }
        }
      }
    `,

    variables: {
      perPage: 5,
    },
  };
  const { data: response, isLoading } = useSWR(request, (request) =>
    fetcher(request),
  );

  // return <pre>{JSON.stringify(response, null, 4)}</pre>;

  if (isLoading) {
    return <span>Loading anime.</span>;
  }

  if (response && !isLoading) {
    return (
      <main>
        {response.data.Page.media.map((item: Card) => {
          {
            /* return <Card key={item.id} {...item} />; */
          }
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              coverImage={item.coverImage}
            />
          );
        })}
        <pre>{JSON.stringify(response, null, 4)}</pre>
      </main>
    );
  }
}

type Card = {
  id: number;
  coverImage: {
    large: string;
  };
  title: {
    romaji: string;
    english: string;
    native: string;
  };
};

function Card(props: Card) {
  return (
    <div className="card">
      <Image
        width={100}
        height={100}
        src={props.coverImage.large}
        alt={`Cover Image for media ${props.title.english}`}
      />
    </div>
  );
}
