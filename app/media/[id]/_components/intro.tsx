import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { query } from "@/app/ApolloClient";
import { GetMediaQuery } from "@/app/_types/__generated__/graphql";
import { GET_MEDIUM } from "@/app/queries";
import styles from "./intro.module.scss";

export async function Intro({ mediaId }: { mediaId: string }) {
    const { data, error } = await query({
        query: GET_MEDIUM,
        variables: {
            id: Number(mediaId),
        },
        errorPolicy: "all",
    });

    if (!data?.Media || error?.message) {
        notFound();
        // return (
        //     <div>
        //         <h1>something went wrong (no data)</h1>
        //     </div>
        // );
    }

    const { Media } = data;

    if (!Media.title) {
        return;
    }

    const { english, romaji, native } = Media.title;

    return (
        <section className={styles.intro}>
            <div className={styles.imgWrapper}>
                <CoverImage image={Media.coverImage} title={Media.title} />
            </div>
            <div className={styles.text}>
                <div className={styles.titles}>
                    <h1>{english || romaji || native}</h1>
                    <h2>Type: {Media.type === "ANIME" ? "Anime" : "Comics"}</h2>
                    <h2>{native && `Original: ${native}`}</h2>
                    <h2>{romaji && `Romaji: ${romaji}`}</h2>
                </div>
                <div className={styles.synopsis}>
                    <h3>Synopsis</h3>
                    <p className="description">
                        {parse(
                            Media.description ||
                                "No description was provided for this media.",
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}

type CoverImage = Partial<NonNullable<GetMediaQuery["Media"]>["coverImage"]>;
type MediaTitle = Partial<NonNullable<GetMediaQuery["Media"]>["title"]>;

export function CoverImage({
    image,
    title,
}: {
    image: CoverImage;
    title: MediaTitle;
}) {
    if (!image || !title) {
        return (
            <span>
                no img or title, something prob went very wrong in the api
                response
            </span>
        );
    }

    const imageSrc = image.extraLarge || image.large;

    if (!imageSrc) {
        return <span>placeholder image here</span>;
    }

    return (
        <Image
            alt={`Cover image for media "${title.english}"`}
            src={imageSrc}
            className={styles.coverImage}
            loading={"eager"}
            sizes="(max-width: 768px) 150px, 300px"
            fill
        />
    );
}
