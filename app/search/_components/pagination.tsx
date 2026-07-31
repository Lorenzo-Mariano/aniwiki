import Link from "next/link";
import { SearchMediaQuery } from "@/app/_types/__generated__/graphql";
import { SearchParams } from "../page";
import styles from "../page.module.scss";

type PageInfo = NonNullable<NonNullable<SearchMediaQuery["Page"]>["pageInfo"]>;

type PaginationProps = {
    pageInfo: PageInfo | null | undefined;
};
export default function Pagination({
    pageInfo,
    query,
}: PaginationProps & SearchParams) {
    if (!pageInfo || !pageInfo.currentPage) {
        return <span>No page info was fetched.</span>;
    }

    const { currentPage, hasNextPage } = pageInfo;
    const prevPage = Math.max(1, currentPage - 1);
    const nextPage = currentPage + 1;

    return (
        <nav aria-label="Pagination" className={styles.pagination}>
            {currentPage > 1 && (
                <Link
                    href={{
                        query: {
                            page: prevPage,
                            query: query,
                        },
                    }}
                >
                    ← Prev
                </Link>
            )}
            <span>{currentPage}</span>
            {hasNextPage && (
                <Link
                    href={{
                        query: {
                            page: nextPage,
                            query: query,
                        },
                    }}
                >
                    Next →
                </Link>
            )}
        </nav>
    );
}
