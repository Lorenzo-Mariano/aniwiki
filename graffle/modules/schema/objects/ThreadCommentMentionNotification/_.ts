import type * as $Fields from './fields.js'

export * as ThreadCommentMentionNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when authenticated user is @ mentioned in a forum thread comment
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 9 |
*/
export interface ThreadCommentMentionNotification {
kind: "Object",
name: "ThreadCommentMentionNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
commentId: $Fields.commentId,
context: $Fields.context,
createdAt: $Fields.createdAt,
thread: $Fields.thread,
comment: $Fields.comment,
user: $Fields.user
}
}