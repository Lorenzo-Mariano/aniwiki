import type * as $Members from './members.js'

export * as ThreadSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Thread sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `TITLE`
* - `TITLE_DESC`
* - `CREATED_AT`
* - `CREATED_AT_DESC`
* - `UPDATED_AT`
* - `UPDATED_AT_DESC`
* - `REPLIED_AT`
* - `REPLIED_AT_DESC`
* - `REPLY_COUNT`
* - `REPLY_COUNT_DESC`
* - `VIEW_COUNT`
* - `VIEW_COUNT_DESC`
* - `IS_STICKY`
* - `SEARCH_MATCH`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 16 |
*/
export interface ThreadSort {
kind: "Enum",
name: "ThreadSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.TITLE
| $Members.TITLE_DESC
| $Members.CREATED_AT
| $Members.CREATED_AT_DESC
| $Members.UPDATED_AT
| $Members.UPDATED_AT_DESC
| $Members.REPLIED_AT
| $Members.REPLIED_AT_DESC
| $Members.REPLY_COUNT
| $Members.REPLY_COUNT_DESC
| $Members.VIEW_COUNT
| $Members.VIEW_COUNT_DESC
| $Members.IS_STICKY
| $Members.SEARCH_MATCH
}