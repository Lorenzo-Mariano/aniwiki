import type * as $Members from './members.js'

export * as ExternalLinkType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* **Members:**
* - `INFO`
* - `STREAMING`
* - `SOCIAL`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 3 |
*/
export interface ExternalLinkType {
kind: "Enum",
name: "ExternalLinkType",
members: $Members.INFO
| $Members.STREAMING
| $Members.SOCIAL
}