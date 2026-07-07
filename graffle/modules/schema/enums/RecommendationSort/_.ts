import type * as $Members from './members.js'

export * as RecommendationSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Recommendation sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `RATING`
* - `RATING_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 4 |
*/
export interface RecommendationSort {
kind: "Enum",
name: "RecommendationSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.RATING
| $Members.RATING_DESC
}