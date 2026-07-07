import type * as $Fields from './fields.js'

export * as StaffStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's staff statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface StaffStats {
kind: "Object",
name: "StaffStats",
fields: {
__typename: $Fields.__typename,
staff: $Fields.staff,
amount: $Fields.amount,
meanScore: $Fields.meanScore,
timeWatched: $Fields.timeWatched
}
}