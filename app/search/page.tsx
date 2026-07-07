import styles from "./page.module.scss";
import { Suspense } from "react";
import Image from "next/image";
import Form from "next/form";
import { graffle } from "@/app/_lib/graffle-client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const search = await searchParams;

  return (
    <main className={styles.page}>
      <h2>Search results for {`"${search.query}"`}</h2>
      <Form action={"/search"}>
        <input
          placeholder="Search again"
          defaultValue={search.query}
          className={styles.search}
          type="text"
          name="query"
        />
      </Form>
      <Suspense fallback={<Loading />}>
        <Results query={search.query} />
      </Suspense>
    </main>
  );
}

async function Results({ query: search }: { query: string }) {
  const query = graffle.gql(
    `
      query searchMedia($search: String!) {
        Page(perPage: 15) {
          media(isAdult: false, search: $search, sort: FAVOURITES_DESC ) {
            id
            coverImage {
              extraLarge
            }
            status
            favourites
            startDate {
              month
              year
            }
            type
            title {
              english
              native
            }
          }
        }
      }
    `,
  );

  const response = await query.searchMedia({ search });

  const media = response?.Page?.media?.filter(Boolean) ?? [];

  return (
    <div className={styles.results}>
      {media.map((item) => {
        if (!item) {
          return;
        }

        const title = item.title?.english ?? item.title?.native ?? "Untitled";

        const date = item.startDate?.year
          ? `${item.startDate.year}${
              item.startDate.month
                ? `-${String(item.startDate.month).padStart(2, "0")}`
                : ""
            }`
          : "Unknown";

        return (
          <div key={item.id} className={styles.item}>
            {item.coverImage?.extraLarge ? (
              <Image
                height={160}
                width={120}
                src={item.coverImage.extraLarge}
                alt={`cover image for ${title}`}
              />
            ) : (
              <div style={{ width: 120, height: 160 }} />
            )}

            <div className="details">
              <strong>{title}</strong>

              <div>
                <span>{item.type ?? "Unknown type"}</span>
              </div>

              <div>
                <span>Status: {item.status ?? "Unknown"}</span>
              </div>

              <div>
                <span>Start: {date}</span>
              </div>

              <div>
                <span>❤️ {item.favourites?.toLocaleString() ?? 0}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
function Loading() {
  return <h1>Loading anime and manga search results...</h1>;
}
