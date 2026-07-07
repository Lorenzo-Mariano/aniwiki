import type * as $Fields from './fields.js'

export * as MediaDeletionNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a media tracked in a user's list is deleted from the site
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface MediaDeletionNotification {
kind: "Object",
name: "MediaDeletionNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
deletedMediaTitle: $Fields.deletedMediaTitle,
context: $Fields.context,
reason: $Fields.reason,
createdAt: $Fields.createdAt
}
}