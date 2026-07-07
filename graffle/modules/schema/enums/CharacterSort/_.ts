import type * as $Members from './members.js'

export * as CharacterSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Character sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `ROLE`
* - `ROLE_DESC`
* - `SEARCH_MATCH`
* - `FAVOURITES`
* - `FAVOURITES_DESC`
* - `RELEVANCE` - Order manually decided by moderators
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 8 |
*/
export interface CharacterSort {
kind: "Enum",
name: "CharacterSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.ROLE
| $Members.ROLE_DESC
| $Members.SEARCH_MATCH
| $Members.FAVOURITES
| $Members.FAVOURITES_DESC
| $Members.RELEVANCE
}