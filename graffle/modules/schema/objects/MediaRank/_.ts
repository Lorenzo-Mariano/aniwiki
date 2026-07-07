import type * as $Fields from './fields.js'

export * as MediaRank from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* The ranking of a media in a particular time span and format compared to other media
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface MediaRank {
kind: "Object",
name: "MediaRank",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
rank: $Fields.rank,
type: $Fields.type,
format: $Fields.format,
year: $Fields.year,
season: $Fields.season,
allTime: $Fields.allTime,
context: $Fields.context
}
}