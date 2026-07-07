import type * as $Fields from './fields.js'

export * as ScoreDistribution from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's list score distribution.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface ScoreDistribution {
kind: "Object",
name: "ScoreDistribution",
fields: {
__typename: $Fields.__typename,
score: $Fields.score,
amount: $Fields.amount
}
}