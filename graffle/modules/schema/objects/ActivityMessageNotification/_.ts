import type * as $Fields from './fields.js'

export * as ActivityMessageNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a user is send an activity message
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ActivityMessageNotification {
kind: "Object",
name: "ActivityMessageNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
activityId: $Fields.activityId,
context: $Fields.context,
createdAt: $Fields.createdAt,
message: $Fields.message,
user: $Fields.user
}
}