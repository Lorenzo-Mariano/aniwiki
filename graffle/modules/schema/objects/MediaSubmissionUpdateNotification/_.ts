import type * as $Fields from './fields.js'

export * as MediaSubmissionUpdateNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a media submission is accepted, partially accepted, or rejected
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface MediaSubmissionUpdateNotification {
kind: "Object",
name: "MediaSubmissionUpdateNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
contexts: $Fields.contexts,
status: $Fields.status,
notes: $Fields.notes,
createdAt: $Fields.createdAt,
media: $Fields.media,
submittedTitle: $Fields.submittedTitle
}
}