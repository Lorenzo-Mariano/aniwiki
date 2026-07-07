import type * as $Fields from './fields.js'

export * as ActivityReplyLikeNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a activity reply is liked
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ActivityReplyLikeNotification {
kind: "Object",
name: "ActivityReplyLikeNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
activityId: $Fields.activityId,
context: $Fields.context,
createdAt: $Fields.createdAt,
activity: $Fields.activity,
user: $Fields.user
}
}