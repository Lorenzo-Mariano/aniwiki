import type * as $Fields from './fields.js'

export * as StaffSubmissionUpdateNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a staff submission is accepted, partially accepted, or rejected
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface StaffSubmissionUpdateNotification {
kind: "Object",
name: "StaffSubmissionUpdateNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
contexts: $Fields.contexts,
status: $Fields.status,
notes: $Fields.notes,
createdAt: $Fields.createdAt,
staff: $Fields.staff
}
}