import type * as $Fields from './fields.js'

export * as YearStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's year statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface YearStats {
kind: "Object",
name: "YearStats",
fields: {
__typename: $Fields.__typename,
year: $Fields.year,
amount: $Fields.amount,
meanScore: $Fields.meanScore
}
}