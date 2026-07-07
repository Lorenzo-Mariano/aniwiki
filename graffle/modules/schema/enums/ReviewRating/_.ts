import type * as $Members from './members.js'

export * as ReviewRating from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Review rating enums
*
* **Members:**
* - `NO_VOTE`
* - `UP_VOTE`
* - `DOWN_VOTE`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface ReviewRating {
kind: "Enum",
name: "ReviewRating",
members: $Members.NO_VOTE
| $Members.UP_VOTE
| $Members.DOWN_VOTE
}