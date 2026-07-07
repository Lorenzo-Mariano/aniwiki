import type * as $Members from './members.js'

export * as SubmissionSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Submission sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 2 |
*/
export interface SubmissionSort {
kind: "Enum",
name: "SubmissionSort",
members: $Members.ID
| $Members.ID_DESC
}