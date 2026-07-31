import { query } from "@/app/ApolloClient";
import { SEARCH_MEDIA } from "@/app/queries";
import { SearchParams } from "../page";
import styles from "../page.module.scss";
import Pagination from "./pagination";
import SearchItem from "./search-item";

export default async function Results(params: SearchParams) {
    const { data } = await query({
        query: SEARCH_MEDIA,
        variables: {
            search: params.query,
            page: params.page || 1,
        },
    });

    if (!data?.Page?.media || !data?.Page?.pageInfo) {
        return (
            <div className="error">
                Something went wrong when fetching anime and manga.
            </div>
        );
    }

    const { media, pageInfo } = data.Page;

    return (
        <div className={styles.wrapper}>
            <div className={styles.results}>
                {media.length === 0 && (
                    <h3>
                        {`We couldn't find any anime or manga called "${params.query}"`}
                    </h3>
                )}
                {media.map(
                    (item) => item && <SearchItem key={item.id} {...item} />,
                )}
            </div>
            <Pagination
                pageInfo={pageInfo}
                page={params.page}
                query={params.query}
            />
        </div>
    );
}
