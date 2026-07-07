import type * as $Members from './members.js'

export * as SubmissionStatus from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Submission status
*
* **Members:**
* - `PENDING`
* - `REJECTED`
* - `PARTIALLY_ACCEPTED`
* - `ACCEPTED`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 4 |
*/
export interface SubmissionStatus {
kind: "Enum",
name: "SubmissionStatus",
members: $Members.PENDING
| $Members.REJECTED
| $Members.PARTIALLY_ACCEPTED
| $Members.ACCEPTED
}