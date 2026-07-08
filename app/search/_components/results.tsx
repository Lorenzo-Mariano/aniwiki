import Image from "next/image";
import { TypedDocumentNode, gql } from "@apollo/client";
import { query } from "@/app/ApolloClient";
import {
    SearchMediaQuery,
    SearchMediaQueryVariables,
} from "@/app/_types/__generated__/graphql";
import { SearchParams } from "../page";
import styles from "../page.module.scss";
import Pagination from "./pagination";

export default async function Results(params: SearchParams) {
    const SEARCH_MEDIA: TypedDocumentNode<
        SearchMediaQuery,
        SearchMediaQueryVariables
    > = gql`
        query searchMedia($search: String!, $page: Int = 1) {
            Page(perPage: 10, page: $page) {
                pageInfo {
                    currentPage
                    hasNextPage
                    lastPage
                }
                media(isAdult: false, search: $search, sort: FAVOURITES_DESC) {
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
    `;

    const { data } = await query({
        query: SEARCH_MEDIA,
        variables: {
            search: params.query,
            page: params.page,
        },
    });

    if (!data || !data.Page || !data.Page.media) {
        return (
            <div className="error">
                Something went wrong when fetching anime and manga.
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className={styles.results}>
                {data.Page.media.length === 0 && (
                    <h3>
                        {`We couldn't find any anime or manga called "${params.query}"`}
                    </h3>
                )}
                {data.Page.media.map((item) => {
                    if (!item) {
                        return;
                    }

                    const title =
                        item.title?.english ?? item.title?.native ?? "Untitled";

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
                                    <span>
                                        Status: {item.status ?? "Unknown"}
                                    </span>
                                </div>

                                <div>
                                    <span>Start: {date}</span>
                                </div>

                                <div>
                                    <span>
                                        ❤️{" "}
                                        {item.favourites?.toLocaleString() ?? 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Pagination pageInfo={data.Page.pageInfo} {...params} />
        </div>
    );
}
