import type * as $Members from './members.js'

export * as SiteTrendSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Site trend sort enums
*
* **Members:**
* - `DATE`
* - `DATE_DESC`
* - `COUNT`
* - `COUNT_DESC`
* - `CHANGE`
* - `CHANGE_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 6 |
*/
export interface SiteTrendSort {
kind: "Enum",
name: "SiteTrendSort",
members: $Members.DATE
| $Members.DATE_DESC
| $Members.COUNT
| $Members.COUNT_DESC
| $Members.CHANGE
| $Members.CHANGE_DESC
}