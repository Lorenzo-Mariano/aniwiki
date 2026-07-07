import type * as $Members from './members.js'

export * as StudioSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Studio sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `NAME`
* - `NAME_DESC`
* - `SEARCH_MATCH`
* - `FAVOURITES`
* - `FAVOURITES_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 7 |
*/
export interface StudioSort {
kind: "Enum",
name: "StudioSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.NAME
| $Members.NAME_DESC
| $Members.SEARCH_MATCH
| $Members.FAVOURITES
| $Members.FAVOURITES_DESC
}