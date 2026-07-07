import type * as $Fields from './fields.js'

export * as ThreadComment from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Forum Thread Comment
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 14 |
*/
export interface ThreadComment {
kind: "Object",
name: "ThreadComment",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
threadId: $Fields.threadId,
comment: $Fields.comment,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
siteUrl: $Fields.siteUrl,
createdAt: $Fields.createdAt,
updatedAt: $Fields.updatedAt,
thread: $Fields.thread,
user: $Fields.user,
likes: $Fields.likes,
childComments: $Fields.childComments,
isLocked: $Fields.isLocked
}
}