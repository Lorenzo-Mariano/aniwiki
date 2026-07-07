import type * as $Fields from './fields.js'

export * as StatusDistribution from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* The distribution of the watching/reading status of media or a user's list
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface StatusDistribution {
kind: "Object",
name: "StatusDistribution",
fields: {
__typename: $Fields.__typename,
status: $Fields.status,
amount: $Fields.amount
}
}