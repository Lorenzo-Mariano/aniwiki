import type * as $Members from './members.js'

export * as RecommendationRating from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Recommendation rating enums
*
* **Members:**
* - `NO_RATING`
* - `RATE_UP`
* - `RATE_DOWN`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface RecommendationRating {
kind: "Enum",
name: "RecommendationRating",
members: $Members.NO_RATING
| $Members.RATE_UP
| $Members.RATE_DOWN
}