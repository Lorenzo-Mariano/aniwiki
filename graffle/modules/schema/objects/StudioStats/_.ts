import type * as $Fields from './fields.js'

export * as StudioStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's studio statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface StudioStats {
kind: "Object",
name: "StudioStats",
fields: {
__typename: $Fields.__typename,
studio: $Fields.studio,
amount: $Fields.amount,
meanScore: $Fields.meanScore,
timeWatched: $Fields.timeWatched
}
}