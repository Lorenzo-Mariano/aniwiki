import Form from "next/form";
import Image from "next/image";
import Trending from "./_components/trending";
import styles from "./page.module.scss";

export default function Page() {
    return (
        <main className={styles.page}>
            <Form action="/search" className={styles.form}>
                <Image
                    unoptimized
                    src="/typing.gif"
                    alt="anime typing gif"
                    preload
                    sizes="320px"
                    width={320}
                    height={180}
                />
                <h1>Search anime or manga below.</h1>
                <input type="text" name="query" required />
                <button>Search!</button>
            </Form>
            <Trending />
        </main>
    );
}
