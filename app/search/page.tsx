import { Suspense } from "react";
import Form from "next/form";
import Image from "next/image";
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
            <section className={styles.content}>
                <Form action={"/search"} className={styles.form}>
                    <input
                        placeholder="Search again"
                        defaultValue={params.query}
                        className={styles.search}
                        type="text"
                        name="query"
                    />
                    <button type="submit">Search</button>
                </Form>
                {params.query ? (
                    <Suspense fallback={<Loading />}>
                        <Results {...params} />
                    </Suspense>
                ) : (
                    <div className={styles.startTyping}>
                        <h1>Type to search results</h1>
                        <Image
                            unoptimized
                            loading="eager"
                            src="/bocchi.gif"
                            width={480}
                            height={360}
                            alt="hitori gotou lookin around all scared gif"
                        />
                    </div>
                )}
            </section>
        </main>
    );
}
