import Image from "next/image";
import Link from "next/link";
import { query } from "../ApolloClient";
import { GET_TRENDING_MEDIA } from "../queries";
import styles from "./trending.module.scss";

function formatTitle(title: string) {
    if (title.length < 45) {
        return title;
    }

    const truncated = title.slice(0, 40).split("");
    if (truncated[truncated.length - 1] === " ") {
        truncated.pop();
    }

    return `${truncated.join("")}...`;
}

export default async function TrendingMedia() {
    const { data } = await query({
        query: GET_TRENDING_MEDIA,
    });

    if (!data?.Page?.media) {
        return (
            <div className="error">
                <h1>
                    {
                        "Sorry, we couldn't find any trending anime or manga. Somehow."
                    }
                </h1>
            </div>
        );
    }

    return (
        <div className={styles.trending}>
            <header>
                <h1>Top Airing Anime & Manga</h1>
            </header>
            <div className={styles.results}>
                {data.Page.media
                    .filter((item) => item != null)
                    .map((item) => {
                        return (
                            <div className={styles.card} key={item.id}>
                                {item.coverImage?.extraLarge && (
                                    <Link href={`/media/${item.id}`}>
                                        <div className={styles.imgWrapper}>
                                            <Image
                                                fill
                                                sizes="(max-width: 768px) 120px, 300px"
                                                src={item.coverImage.extraLarge}
                                                alt={`Cover image for ${item.title!.english}`}
                                            />
                                        </div>
                                    </Link>
                                )}
                                <div className={styles.details}>
                                    {item.title && (
                                        <Link
                                            className={styles.title}
                                            href={`/media/${item.id}`}
                                        >
                                            {formatTitle(
                                                item.title.english ||
                                                    item.title.native!,
                                            )}
                                        </Link>
                                    )}
                                    <div>
                                        <span>
                                            {item.type === "ANIME"
                                                ? "Anime"
                                                : "Comics"}
                                        </span>
                                        <span className={styles.favs}>
                                            {item.favourites} Favourites
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
