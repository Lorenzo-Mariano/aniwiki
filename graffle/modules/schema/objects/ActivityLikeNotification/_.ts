import type * as $Fields from './fields.js'

export * as ActivityLikeNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a activity is liked
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ActivityLikeNotification {
kind: "Object",
name: "ActivityLikeNotification",
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