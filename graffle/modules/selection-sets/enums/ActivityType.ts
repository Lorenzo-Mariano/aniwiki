/**
* Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Activity type enum.
*
* **Members:**
* - `TEXT` - A text activity
* - `ANIME_LIST` - A anime list update activity
* - `MANGA_LIST` - A manga list update activity
* - `MESSAGE` - A text message activity sent to another user
* - `MEDIA_LIST` - Anime & Manga list update, only used in query arguments
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 5 |
*/
export type ActivityType = "TEXT"
| "ANIME_LIST"
| "MANGA_LIST"
| "MESSAGE"
| "MEDIA_LIST"