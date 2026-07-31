import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Characters } from "./_components/characters";
import { Intro } from "./_components/intro";
import { Reviews } from "./_components/reviews";
import styles from "./page.module.scss";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!id || !/^\d+$/.test(id)) {
        return redirect("/search");
    }

    return (
        <main className={styles.page}>
            <Intro mediaId={id} />
            <Suspense fallback={<LoadingChars />}>
                <Characters />
            </Suspense>
            <Reviews mediaId={id} />
        </main>
    );
}

function LoadingChars() {
    return <div className={styles.loadingChars}></div>;
}
