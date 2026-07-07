import type * as $Fields from './fields.js'

export * as Recommendation from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media recommendation
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface Recommendation {
kind: "Object",
name: "Recommendation",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
rating: $Fields.rating,
userRating: $Fields.userRating,
media: $Fields.media,
mediaRecommendation: $Fields.mediaRecommendation,
user: $Fields.user
}
}