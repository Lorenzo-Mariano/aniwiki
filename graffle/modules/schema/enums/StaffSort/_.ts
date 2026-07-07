import type * as $Members from './members.js'

export * as StaffSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Staff sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `ROLE`
* - `ROLE_DESC`
* - `LANGUAGE`
* - `LANGUAGE_DESC`
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
* | **Members** | 10 |
*/
export interface StaffSort {
kind: "Enum",
name: "StaffSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.ROLE
| $Members.ROLE_DESC
| $Members.LANGUAGE
| $Members.LANGUAGE_DESC
| $Members.SEARCH_MATCH
| $Members.FAVOURITES
| $Members.FAVOURITES_DESC
| $Members.RELEVANCE
}