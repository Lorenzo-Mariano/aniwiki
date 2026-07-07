import type * as $Fields from './fields.js'

export * as TextActivity from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User text activity
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 15 |
*/
export interface TextActivity {
kind: "Object",
name: "TextActivity",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
replyCount: $Fields.replyCount,
text: $Fields.text,
siteUrl: $Fields.siteUrl,
isLocked: $Fields.isLocked,
isSubscribed: $Fields.isSubscribed,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
isPinned: $Fields.isPinned,
createdAt: $Fields.createdAt,
user: $Fields.user,
replies: $Fields.replies,
likes: $Fields.likes
}
}