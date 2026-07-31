import styles from "./loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.page}>
            <div className={styles.intro}>
                <div className={styles.img}></div>
            </div>
            <div className={styles.characters}></div>
        </div>
    );
}
