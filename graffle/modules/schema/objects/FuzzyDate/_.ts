import type * as $Fields from './fields.js'

export * as FuzzyDate from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Date object that allows for incomplete date values (fuzzy)
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface FuzzyDate {
kind: "Object",
name: "FuzzyDate",
fields: {
__typename: $Fields.__typename,
year: $Fields.year,
month: $Fields.month,
day: $Fields.day
}
}