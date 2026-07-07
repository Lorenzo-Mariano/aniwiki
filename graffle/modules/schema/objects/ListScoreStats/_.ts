import type * as $Fields from './fields.js'

export * as ListScoreStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's list score statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface ListScoreStats {
kind: "Object",
name: "ListScoreStats",
fields: {
__typename: $Fields.__typename,
meanScore: $Fields.meanScore,
standardDeviation: $Fields.standardDeviation
}
}