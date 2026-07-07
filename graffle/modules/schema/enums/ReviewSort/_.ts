import type * as $Members from './members.js'

export * as ReviewSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Review sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `SCORE`
* - `SCORE_DESC`
* - `RATING`
* - `RATING_DESC`
* - `CREATED_AT`
* - `CREATED_AT_DESC`
* - `UPDATED_AT`
* - `UPDATED_AT_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 10 |
*/
export interface ReviewSort {
kind: "Enum",
name: "ReviewSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.SCORE
| $Members.SCORE_DESC
| $Members.RATING
| $Members.RATING_DESC
| $Members.CREATED_AT
| $Members.CREATED_AT_DESC
| $Members.UPDATED_AT
| $Members.UPDATED_AT_DESC
}