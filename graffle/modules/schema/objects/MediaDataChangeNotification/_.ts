import type * as $Fields from './fields.js'

export * as MediaDataChangeNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a media entry's data was changed in a significant way impacting users' list tracking
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface MediaDataChangeNotification {
kind: "Object",
name: "MediaDataChangeNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
mediaId: $Fields.mediaId,
context: $Fields.context,
reason: $Fields.reason,
createdAt: $Fields.createdAt,
media: $Fields.media
}
}