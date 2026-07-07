import type * as $Members from './members.js'

export * as ActivitySort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Activity sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `PINNED`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface ActivitySort {
kind: "Enum",
name: "ActivitySort",
members: $Members.ID
| $Members.ID_DESC
| $Members.PINNED
}