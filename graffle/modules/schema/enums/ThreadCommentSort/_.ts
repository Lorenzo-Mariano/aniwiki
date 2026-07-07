import type * as $Members from './members.js'

export * as ThreadCommentSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Thread comments sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 2 |
*/
export interface ThreadCommentSort {
kind: "Enum",
name: "ThreadCommentSort",
members: $Members.ID
| $Members.ID_DESC
}