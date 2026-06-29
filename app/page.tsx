import styles from "./page.module.scss";
import Form from "next/form";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.page}>
      <Form action="/search" className={styles.form}>
        <Image
          src="/typing.gif"
          alt="anime typing gif"
          width={320}
          height={180}
        />
        <h1>Search anime or manga below.</h1>
        <input type="text" name="query" />
        <button>Search!</button>
      </Form>
    </main>
  );
}
