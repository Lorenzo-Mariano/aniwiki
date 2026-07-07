import type * as $Members from './members.js'

export * as MediaRankType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The type of ranking
*
* **Members:**
* - `RATED` - Ranking is based on the media's ratings/score
* - `POPULAR` - Ranking is based on the media's popularity
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 2 |
*/
export interface MediaRankType {
kind: "Enum",
name: "MediaRankType",
members: $Members.RATED
| $Members.POPULAR
}