import type * as $Fields from './fields.js'

export * as MediaTrendEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media trend connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface MediaTrendEdge {
kind: "Object",
name: "MediaTrendEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node
}
}