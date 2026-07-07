import type * as $Members from './members.js'

export * as UserSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* User sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `USERNAME`
* - `USERNAME_DESC`
* - `WATCHED_TIME`
* - `WATCHED_TIME_DESC`
* - `CHAPTERS_READ`
* - `CHAPTERS_READ_DESC`
* - `SEARCH_MATCH`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 9 |
*/
export interface UserSort {
kind: "Enum",
name: "UserSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.USERNAME
| $Members.USERNAME_DESC
| $Members.WATCHED_TIME
| $Members.WATCHED_TIME_DESC
| $Members.CHAPTERS_READ
| $Members.CHAPTERS_READ_DESC
| $Members.SEARCH_MATCH
}