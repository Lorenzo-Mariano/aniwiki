import type * as $Members from './members.js'

export * as ActivityType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
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
export interface ActivityType {
kind: "Enum",
name: "ActivityType",
members: $Members.TEXT
| $Members.ANIME_LIST
| $Members.MANGA_LIST
| $Members.MESSAGE
| $Members.MEDIA_LIST
}