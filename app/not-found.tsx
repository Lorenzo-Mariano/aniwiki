import styles from "./page.module.scss";

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404 Not Found</h1>
            <p>{"We couldn't find the page you are looking for."}</p>
        </div>
    );
}
