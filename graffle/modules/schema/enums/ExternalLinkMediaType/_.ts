import type * as $Members from './members.js'

export * as ExternalLinkMediaType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* **Members:**
* - `ANIME`
* - `MANGA`
* - `STAFF`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface ExternalLinkMediaType {
kind: "Enum",
name: "ExternalLinkMediaType",
members: $Members.ANIME
| $Members.MANGA
| $Members.STAFF
}