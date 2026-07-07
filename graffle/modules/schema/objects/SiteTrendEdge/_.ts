import type * as $Fields from './fields.js'

export * as SiteTrendEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Site trend connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface SiteTrendEdge {
kind: "Object",
name: "SiteTrendEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node
}
}