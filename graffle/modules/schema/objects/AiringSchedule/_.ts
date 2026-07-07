import type * as $Fields from './fields.js'

export * as AiringSchedule from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface AiringSchedule {
kind: "Object",
name: "AiringSchedule",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
airingAt: $Fields.airingAt,
timeUntilAiring: $Fields.timeUntilAiring,
episode: $Fields.episode,
mediaId: $Fields.mediaId,
media: $Fields.media
}
}