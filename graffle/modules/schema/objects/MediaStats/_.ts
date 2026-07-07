import type * as $Fields from './fields.js'

export * as MediaStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A media's statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface MediaStats {
kind: "Object",
name: "MediaStats",
fields: {
__typename: $Fields.__typename,
scoreDistribution: $Fields.scoreDistribution,
statusDistribution: $Fields.statusDistribution,
airingProgression: $Fields.airingProgression
}
}