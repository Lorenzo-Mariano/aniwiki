import type * as $Fields from './fields.js'

export * as ListActivity from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User list activity (anime & manga updates)
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 17 |
*/
export interface ListActivity {
kind: "Object",
name: "ListActivity",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
type: $Fields.type,
replyCount: $Fields.replyCount,
status: $Fields.status,
progress: $Fields.progress,
isLocked: $Fields.isLocked,
isSubscribed: $Fields.isSubscribed,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
isPinned: $Fields.isPinned,
siteUrl: $Fields.siteUrl,
createdAt: $Fields.createdAt,
user: $Fields.user,
media: $Fields.media,
replies: $Fields.replies,
likes: $Fields.likes
}
}