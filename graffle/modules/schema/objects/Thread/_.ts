import type * as $Fields from './fields.js'

export * as Thread from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Forum Thread
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 22 |
*/
export interface Thread {
kind: "Object",
name: "Thread",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
title: $Fields.title,
body: $Fields.body,
userId: $Fields.userId,
replyUserId: $Fields.replyUserId,
replyCommentId: $Fields.replyCommentId,
replyCount: $Fields.replyCount,
viewCount: $Fields.viewCount,
isLocked: $Fields.isLocked,
isSticky: $Fields.isSticky,
isSubscribed: $Fields.isSubscribed,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
repliedAt: $Fields.repliedAt,
createdAt: $Fields.createdAt,
updatedAt: $Fields.updatedAt,
user: $Fields.user,
replyUser: $Fields.replyUser,
likes: $Fields.likes,
siteUrl: $Fields.siteUrl,
categories: $Fields.categories,
mediaCategories: $Fields.mediaCategories
}
}