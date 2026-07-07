import type * as $Members from './members.js'

export * as ModActionType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* **Members:**
* - `NOTE`
* - `BAN`
* - `DELETE`
* - `EDIT`
* - `EXPIRE`
* - `REPORT`
* - `RESET`
* - `ANON`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 8 |
*/
export interface ModActionType {
kind: "Enum",
name: "ModActionType",
members: $Members.NOTE
| $Members.BAN
| $Members.DELETE
| $Members.EDIT
| $Members.EXPIRE
| $Members.REPORT
| $Members.RESET
| $Members.ANON
}