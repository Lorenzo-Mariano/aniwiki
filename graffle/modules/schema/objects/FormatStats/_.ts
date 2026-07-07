import type * as $Fields from './fields.js'

export * as FormatStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's format statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface FormatStats {
kind: "Object",
name: "FormatStats",
fields: {
__typename: $Fields.__typename,
format: $Fields.format,
amount: $Fields.amount
}
}