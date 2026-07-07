import type * as $Members from './members.js'

export * as AiringSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Airing schedule sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `MEDIA_ID`
* - `MEDIA_ID_DESC`
* - `TIME`
* - `TIME_DESC`
* - `EPISODE`
* - `EPISODE_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 8 |
*/
export interface AiringSort {
kind: "Enum",
name: "AiringSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.MEDIA_ID
| $Members.MEDIA_ID_DESC
| $Members.TIME
| $Members.TIME_DESC
| $Members.EPISODE
| $Members.EPISODE_DESC
}