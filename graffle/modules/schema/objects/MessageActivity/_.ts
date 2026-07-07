import type * as $Fields from './fields.js'

export * as MessageActivity from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User message activity
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 18 |
*/
export interface MessageActivity {
kind: "Object",
name: "MessageActivity",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
recipientId: $Fields.recipientId,
messengerId: $Fields.messengerId,
type: $Fields.type,
replyCount: $Fields.replyCount,
message: $Fields.message,
isLocked: $Fields.isLocked,
isSubscribed: $Fields.isSubscribed,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
isPinned: $Fields.isPinned,
isPrivate: $Fields.isPrivate,
siteUrl: $Fields.siteUrl,
createdAt: $Fields.createdAt,
recipient: $Fields.recipient,
messenger: $Fields.messenger,
replies: $Fields.replies,
likes: $Fields.likes
}
}