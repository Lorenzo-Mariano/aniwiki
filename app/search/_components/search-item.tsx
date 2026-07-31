import Image from "next/image";
import Link from "next/link";
import { SearchMediaQuery } from "@/app/_types/__generated__/graphql";
import styles from "../page.module.scss";

type SearchItem = NonNullable<
    NonNullable<SearchMediaQuery["Page"]>["media"]
>[number];

export default function rearchItem(props: SearchItem) {
    if (!props?.startDate || !props.coverImage || props.favourites == null) {
        return;
    }

    const title = props.title?.english ?? props.title?.native ?? "Untitled";

    const date = props.startDate.year
        ? `${props.startDate.year}${
              props.startDate.month
                  ? `-${String(props.startDate.month).padStart(2, "0")}`
                  : ""
          }`
        : "Unknown";

    return (
        <div className={styles.item}>
            <Link href={`/media/${props.id}`}>
                {props.coverImage.extraLarge ? (
                    <div className={styles.imgWrapper}>
                        <Image
                            fill
                            sizes="(max-width: 768px) 120px, 300px"
                            src={props.coverImage.extraLarge}
                            alt={`cover image for ${title}`}
                        />
                    </div>
                ) : (
                    <div style={{ width: 120, height: 160 }} />
                )}
            </Link>

            <div className={styles.details}>
                <Link href={`/media/${props.id}`}>
                    <strong>{title}</strong>
                </Link>

                <div className={styles.other}>
                    <span>{props.type ?? "Unknown type"}</span>
                    <span>Status: {props.status ?? "Unknown"}</span>
                    <span className={styles.startDate}>Start: {date}</span>
                    <span className={styles.favsCount}>
                        {props.favourites.toLocaleString() ?? 0}
                        {props.favourites === 1 ? " Favourite" : " Favourites"}
                    </span>
                </div>
            </div>
        </div>
    );
}
