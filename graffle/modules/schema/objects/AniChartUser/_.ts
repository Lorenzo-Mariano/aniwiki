import type * as $Fields from './fields.js'

export * as AniChartUser from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface AniChartUser {
kind: "Object",
name: "AniChartUser",
fields: {
__typename: $Fields.__typename,
user: $Fields.user,
settings: $Fields.settings,
highlights: $Fields.highlights
}
}