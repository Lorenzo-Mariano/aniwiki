import type * as $Fields from './fields.js'

export * as SiteTrend from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Daily site statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface SiteTrend {
kind: "Object",
name: "SiteTrend",
fields: {
__typename: $Fields.__typename,
date: $Fields.date,
count: $Fields.count,
change: $Fields.change
}
}