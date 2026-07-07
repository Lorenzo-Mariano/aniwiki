import type * as $Fields from './fields.js'

export * as StaffSubmission from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A submission for a staff that features in an anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface StaffSubmission {
kind: "Object",
name: "StaffSubmission",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
staff: $Fields.staff,
submission: $Fields.submission,
submitter: $Fields.submitter,
assignee: $Fields.assignee,
status: $Fields.status,
notes: $Fields.notes,
source: $Fields.source,
locked: $Fields.locked,
createdAt: $Fields.createdAt
}
}