"use client";

import { useTransition } from "react";
import Image from "next/image";
import { useSuspenseQuery } from "@apollo/client/react";
import parse, {
    DOMNode,
    Element,
    HTMLReactParserOptions,
    domToReact,
} from "html-react-parser";
import { GetReviewsQuery } from "@/app/_types/__generated__/graphql";
import { GET_REVIEWS } from "@/app/queries";
import styles from "./reviews.module.scss";

export function Reviews({ mediaId }: { mediaId: string }) {
    const [loadingMore, startTransition] = useTransition();
    const { data, error, fetchMore } = useSuspenseQuery(GET_REVIEWS, {
        variables: {
            mediaId: parseInt(mediaId),
            page: 1,
        },
    });

    if (error) {
        return (
            <div className="error">
                something went wrong when fetching reviews asdf asd
            </div>
        );
    }

    if (!data.Media?.reviews?.edges) {
        return (
            <div className="error">
                no data akjfajsl or pag ein th ebomboclaa
            </div>
        );
    }

    const { edges, pageInfo } = data.Media.reviews;

    if (pageInfo?.currentPage == null) {
        return;
    }

    const nextPage = pageInfo.currentPage + 1;

    // once again, filtering doesn't quite narrow down the types.
    // resorting to flatmapping.
    const reviews = edges.flatMap((e) =>
        e?.node?.body != null ? [e.node] : [],
    );

    return (
        <section className={styles.reviews}>
            <h2>User Reviews</h2>
            {reviews.length === 0 ? (
                <div className={styles.noReviews}>
                    <h1>No reviews for this media.</h1>
                </div>
            ) : (
                <>
                    {reviews
                        .filter((r) => r != null)
                        .map((r) => (
                            <ReviewItem key={r.id} {...r} />
                        ))}
                    {pageInfo.hasNextPage && (
                        <button
                            disabled={loadingMore}
                            onClick={() =>
                                startTransition(() => {
                                    fetchMore({
                                        variables: {
                                            mediaId: parseInt(mediaId),
                                            page: nextPage,
                                        },
                                    });
                                })
                            }
                        >
                            {loadingMore ? "..." : "- Show More -"}
                        </button>
                    )}
                </>
            )}
        </section>
    );
}

type ReviewProps = NonNullable<
    NonNullable<
        NonNullable<
            NonNullable<
                NonNullable<
                    NonNullable<
                        NonNullable<GetReviewsQuery["Media"]>["reviews"]
                    >
                >
            >["edges"]
        >[number]
    >["node"]
>;

const parseOpts: HTMLReactParserOptions = {
    replace(domNode) {
        if (!(domNode instanceof Element)) return;

        if (
            domNode.name === "p" ||
            domNode.name === "pre" ||
            domNode.name === "code"
        ) {
            return (
                <div>
                    {domToReact(domNode.children as DOMNode[], parseOpts)}
                </div>
            );
        }
    },
};

function ReviewItem(props: ReviewProps) {
    const { user, body } = props;

    if (!user || !body) return;

    return (
        <div className={styles.review}>
            <div className={styles.reviewHeader}>
                <div className={styles.imgWrapper}>
                    {user.avatar?.large && (
                        <Image
                            fill
                            src={user.avatar.large}
                            sizes="60px"
                            alt={`Profile picture of user ${user.name}`}
                        />
                    )}
                </div>
                <div className={styles.text}>
                    <span className={styles.username}>{user.name}</span>
                    <span className={styles.verdict}>
                        Final Verdict: {props.score} / 100
                    </span>
                    <span className={styles.reviewRating}>
                        {`Review Rating: ${props.rating} likes out of ${props.ratingAmount} ratings`}
                    </span>
                </div>
            </div>

            <div className={styles.reviewBody}>
                {props.summary && (
                    <h4 className={styles.summary}>{props.summary}</h4>
                )}
                {parse(body, parseOpts)}
            </div>
        </div>
    );
}

// if we go down the html route:
// 1 - find a way to get rid of the hydration errors (centers in <p>) [done]
// 2 - Style the images properly guarantee fitting in the container [done]
// 3 - optimize images with next/image [eh]
// 4 - get rid of <code> blocks with text that should be normal lookin [nah, deadend maybe. if this is fixed, everything else follows. edit: nvm, idk if its a deadend after testing the markdown route.]
// 5 - Add underline and center styles?

// if we go down the react-markdown route:
// 1 - Make images embed [done yay]
// 2 - Find a way to make sure the text renders (cuz some reviews are entirely in this "raw" state)

// It seems to me that as-is, the html route starts us off closer to a finished product than the latter.
