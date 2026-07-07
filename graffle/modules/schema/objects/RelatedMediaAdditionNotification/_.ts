import type * as $Fields from './fields.js'

export * as RelatedMediaAdditionNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when new media is added to the site
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface RelatedMediaAdditionNotification {
kind: "Object",
name: "RelatedMediaAdditionNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
mediaId: $Fields.mediaId,
context: $Fields.context,
createdAt: $Fields.createdAt,
media: $Fields.media
}
}