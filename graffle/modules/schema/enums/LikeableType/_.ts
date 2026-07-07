import type * as $Members from './members.js'

export * as LikeableType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Types that can be liked
*
* **Members:**
* - `THREAD`
* - `THREAD_COMMENT`
* - `ACTIVITY`
* - `ACTIVITY_REPLY`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 4 |
*/
export interface LikeableType {
kind: "Enum",
name: "LikeableType",
members: $Members.THREAD
| $Members.THREAD_COMMENT
| $Members.ACTIVITY
| $Members.ACTIVITY_REPLY
}