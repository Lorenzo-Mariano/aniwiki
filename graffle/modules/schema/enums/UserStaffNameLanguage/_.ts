import type * as $Members from './members.js'

export * as UserStaffNameLanguage from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The language the user wants to see staff and character names in
*
* **Members:**
* - `ROMAJI_WESTERN` - The romanization of the staff or character's native name, with western name ordering
* - `ROMAJI` - The romanization of the staff or character's native name
* - `NATIVE` - The staff or character's name in their native language
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface UserStaffNameLanguage {
kind: "Enum",
name: "UserStaffNameLanguage",
members: $Members.ROMAJI_WESTERN
| $Members.ROMAJI
| $Members.NATIVE
}