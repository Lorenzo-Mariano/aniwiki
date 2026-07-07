import type * as $Members from './members.js'

export * as RevisionHistoryAction from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Revision history actions
*
* **Members:**
* - `CREATE`
* - `EDIT`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 2 |
*/
export interface RevisionHistoryAction {
kind: "Enum",
name: "RevisionHistoryAction",
members: $Members.CREATE
| $Members.EDIT
}