import type * as $Fields from './fields.js'

export * as MediaTrend from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Daily media statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 9 |
*/
export interface MediaTrend {
kind: "Object",
name: "MediaTrend",
fields: {
__typename: $Fields.__typename,
mediaId: $Fields.mediaId,
date: $Fields.date,
trending: $Fields.trending,
averageScore: $Fields.averageScore,
popularity: $Fields.popularity,
inProgress: $Fields.inProgress,
releasing: $Fields.releasing,
episode: $Fields.episode,
media: $Fields.media
}
}