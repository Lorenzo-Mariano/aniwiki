import type * as $Fields from './fields.js'

export * as ActivityReplySubscribedNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a user replies to activity the authenticated user has replied to
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ActivityReplySubscribedNotification {
kind: "Object",
name: "ActivityReplySubscribedNotification",
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