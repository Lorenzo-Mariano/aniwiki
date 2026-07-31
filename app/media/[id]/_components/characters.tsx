"use client";

import { useTransition } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSuspenseQuery } from "@apollo/client/react";
import { GetCharactersQuery } from "@/app/_types/__generated__/graphql";
import { GET_CHARACTERS } from "@/app/queries";
import styles from "./characters.module.scss";

export function Characters() {
    const { id: mediaId } = useParams();
    const [loadingMore, startTransition] = useTransition();

    const { data, error, fetchMore } = useSuspenseQuery(GET_CHARACTERS, {
        variables: {
            mediaId: parseInt(mediaId as string),
            page: 1,
        },
    });

    if (error || !data?.Media?.characters) return;

    const { edges, pageInfo: pages } = data.Media.characters;

    if (!edges || !pages?.currentPage) return;

    const nextPage = pages.currentPage + 1;

    return (
        <section className={styles.characters}>
            <header>
                <h2>Characters</h2>
            </header>
            <div className={styles.cards}>
                {edges.length === 0 ? (
                    <NoChars />
                ) : (
                    // for some reason, if I just filter(), the types don't
                    // "catch up" with what we have narrowed down so far.
                    edges
                        .flatMap((edge) => (edge?.node ? [edge.node] : []))
                        .map((char) => (
                            <CharacterCard key={char.id} {...char} />
                        ))
                )}
            </div>
            {
                // The API is not 100% reliable btw, so this btn could show up when in
                // reality, there are no more pages.
                pages.hasNextPage && (
                    <div className={styles.btnWrapper}>
                        <button
                            disabled={loadingMore}
                            onClick={() =>
                                startTransition(() => {
                                    fetchMore({
                                        variables: {
                                            mediaId: parseInt(
                                                mediaId as string,
                                            ),
                                            page: nextPage,
                                        },
                                    });
                                })
                            }
                        >
                            {loadingMore ? "..." : "- Show More -"}
                        </button>
                    </div>
                )
            }
        </section>
    );
}

type CharCardProps = NonNullable<
    NonNullable<
        NonNullable<
            NonNullable<
                NonNullable<GetCharactersQuery["Media"]>["characters"]
            >["edges"]
        >[number]
    >["node"]
>;

function CharacterCard(props: CharCardProps) {
    const imageSrc = props.image?.large;
    const name = props.name?.full;

    if (!imageSrc || !name) {
        return;
    }

    return (
        <div className={styles.card} key={props.id}>
            <div className={styles.imgWrapper}>
                <Image
                    alt={`Image of character "${name}"`}
                    sizes="(max-width: 768px) 100px, 200px"
                    src={imageSrc}
                    className={styles.img}
                    fill
                />
            </div>
            <span className={styles.name}>{name}</span>
        </div>
    );
}

function NoChars() {
    return (
        <div className={styles.noChars}>
            <h2>No characters have been added for this media.</h2>
        </div>
    );
}
