import type * as $Fields from './fields.js'

export * as FollowingNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when the authenticated user is followed by another user
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface FollowingNotification {
kind: "Object",
name: "FollowingNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
context: $Fields.context,
createdAt: $Fields.createdAt,
user: $Fields.user
}
}