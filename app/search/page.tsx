import { Suspense } from "react";
import Form from "next/form";
import Loading from "./_components/loading";
import Results from "./_components/results";
import styles from "./page.module.scss";

export type SearchParams = {
    query: string;
    page: number;
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const params = await searchParams;

    return (
        <main className={styles.page}>
            <Form action={"/search"} className={styles.form}>
                <h2>Search results for {`"${params.query}"`}</h2>
                <input
                    placeholder="Search again"
                    defaultValue={params.query}
                    className={styles.search}
                    type="text"
                    name="query"
                />
            </Form>
            <Suspense fallback={<Loading />}>
                <Results {...params} />
            </Suspense>
        </main>
    );
}
