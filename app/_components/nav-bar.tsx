import Link from "next/link";
import styles from "./nav-bar.module.scss";

export default function NavBar() {
    return (
        <nav className={styles.wrapper}>
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
        </nav>
    );
}
