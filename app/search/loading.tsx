import styles from "./page.module.scss";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <h1>Loading anime and manga search results...</h1>
        </div>
    );
}
