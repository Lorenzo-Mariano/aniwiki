import type * as $Fields from './fields.js'

export * as Review from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A Review that features in an anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 16 |
*/
export interface Review {
kind: "Object",
name: "Review",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
mediaId: $Fields.mediaId,
mediaType: $Fields.mediaType,
summary: $Fields.summary,
body: $Fields.body,
rating: $Fields.rating,
ratingAmount: $Fields.ratingAmount,
userRating: $Fields.userRating,
score: $Fields.score,
private: $Fields.private,
siteUrl: $Fields.siteUrl,
createdAt: $Fields.createdAt,
updatedAt: $Fields.updatedAt,
user: $Fields.user,
media: $Fields.media
}
}