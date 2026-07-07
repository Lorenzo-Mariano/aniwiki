import type * as $Fields from './fields.js'

export * as ActivityReply from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Replay to an activity item
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 9 |
*/
export interface ActivityReply {
kind: "Object",
name: "ActivityReply",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
activityId: $Fields.activityId,
text: $Fields.text,
likeCount: $Fields.likeCount,
isLiked: $Fields.isLiked,
createdAt: $Fields.createdAt,
user: $Fields.user,
likes: $Fields.likes
}
}