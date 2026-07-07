import type * as $Members from './members.js'

export * as MediaTrendSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media trend sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `MEDIA_ID`
* - `MEDIA_ID_DESC`
* - `DATE`
* - `DATE_DESC`
* - `SCORE`
* - `SCORE_DESC`
* - `POPULARITY`
* - `POPULARITY_DESC`
* - `TRENDING`
* - `TRENDING_DESC`
* - `EPISODE`
* - `EPISODE_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 14 |
*/
export interface MediaTrendSort {
kind: "Enum",
name: "MediaTrendSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.MEDIA_ID
| $Members.MEDIA_ID_DESC
| $Members.DATE
| $Members.DATE_DESC
| $Members.SCORE
| $Members.SCORE_DESC
| $Members.POPULARITY
| $Members.POPULARITY_DESC
| $Members.TRENDING
| $Members.TRENDING_DESC
| $Members.EPISODE
| $Members.EPISODE_DESC
}