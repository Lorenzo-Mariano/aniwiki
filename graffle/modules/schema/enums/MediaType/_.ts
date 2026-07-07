import type * as $Members from './members.js'

export * as MediaType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media type enum, anime or manga.
*
* **Members:**
* - `ANIME` - Japanese Anime
* - `MANGA` - Asian comic
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 2 |
*/
export interface MediaType {
kind: "Enum",
name: "MediaType",
members: $Members.ANIME
| $Members.MANGA
}