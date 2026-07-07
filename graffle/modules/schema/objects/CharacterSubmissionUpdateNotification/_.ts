import type * as $Fields from './fields.js'

export * as CharacterSubmissionUpdateNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a character submission is accepted, partially accepted, or rejected
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface CharacterSubmissionUpdateNotification {
kind: "Object",
name: "CharacterSubmissionUpdateNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
contexts: $Fields.contexts,
status: $Fields.status,
notes: $Fields.notes,
createdAt: $Fields.createdAt,
character: $Fields.character
}
}