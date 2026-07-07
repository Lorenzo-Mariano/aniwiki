// import { graffle } from "@/app/_lib/graffle-client";
import styles from "./page.module.scss";
import Form from "next/form";
import Image from "next/image";
import { query } from "./ApolloClient";
import { gql } from "@apollo/client";

export default function Page() {
  return (
    <main className={styles.page}>
      <Form action="/search" className={styles.form}>
        <Image
          unoptimized
          src="/typing.gif"
          alt="anime typing gif"
          preload
          width={320}
          height={180}
        />
        <h1>Search anime or manga below.</h1>
        <input type="text" name="query" />
        <button>Search!</button>
      </Form>
      <Trending />
    </main>
  );
}

async function Trending() {
  const { data } = await query({
    query: gql`
      query getTrending {
        Page(perPage: 15) {
          media(
            isAdult: false
            status_in: [HIATUS, RELEASING]
            sort: TRENDING_DESC
          ) {
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
  });

  // const query = graffle.gql(
  //   `
  // query getTrending {
  //     Page(perPage: 15) {
  //         media (isAdult: false, status_in: [HIATUS, RELEASING], sort: TRENDING_DESC) {
  //             id
  //             coverImage {
  //                 extraLarge
  //             }
  //             status
  //             favourites
  //             startDate {
  //                 month
  //                 year
  //             }
  //             type
  //             title {
  //                 english
  //                 native
  //             }
  //         }
  //     }
  // }
  //  `,
  // );

  // const trendingMedia = await query.getTrending();

  // why is everything nullable :sob:
  // if (!trendingMedia?.Page?.media) {
  if (!data?.Page?.media) {
    return <h1>No trending media found.</h1>;
  }

  return (
    <div className={styles.trending}>
      <header>
        <h1>Top Airing Anime & Manga</h1>
      </header>
      <div className={styles.results}>
        {trendingMedia.Page.media.map((item) => {
          if (!item) {
            return;
          }

          return (
            <div className={styles.card} key={item.id}>
              {item.coverImage?.extraLarge && (
                <a href={`/media/${item.id}`}>
                  <Image
                    height={400}
                    width={300}
                    src={item.coverImage.extraLarge}
                    alt={`Cover image for ${item.title!.english}`}
                  />
                </a>
              )}
              <div className={styles.details}>
                {item.title && (
                  <a className={styles.title} href={`/media/${item.id}`}>
                    <p>{item.title.english || item.title.native}</p>
                    {/* <p>{item.title.native}</p> */}
                  </a>
                )}
                <span>{item.type === "ANIME" ? "Anime" : "Manga"}</span>
                <p>{item.favourites} Favourites</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
