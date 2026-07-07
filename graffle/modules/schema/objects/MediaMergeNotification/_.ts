import type * as $Fields from './fields.js'

export * as MediaMergeNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a media entry is merged into another for a user who had it on their list
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface MediaMergeNotification {
kind: "Object",
name: "MediaMergeNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
mediaId: $Fields.mediaId,
deletedMediaTitles: $Fields.deletedMediaTitles,
context: $Fields.context,
reason: $Fields.reason,
createdAt: $Fields.createdAt,
media: $Fields.media
}
}