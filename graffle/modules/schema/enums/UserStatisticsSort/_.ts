import type * as $Members from './members.js'

export * as UserStatisticsSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* User statistics sort enum
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `COUNT`
* - `COUNT_DESC`
* - `PROGRESS`
* - `PROGRESS_DESC`
* - `MEAN_SCORE`
* - `MEAN_SCORE_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 8 |
*/
export interface UserStatisticsSort {
kind: "Enum",
name: "UserStatisticsSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.COUNT
| $Members.COUNT_DESC
| $Members.PROGRESS
| $Members.PROGRESS_DESC
| $Members.MEAN_SCORE
| $Members.MEAN_SCORE_DESC
}