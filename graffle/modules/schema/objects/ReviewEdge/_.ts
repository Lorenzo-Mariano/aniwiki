import type * as $Fields from './fields.js'

export * as ReviewEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Review connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface ReviewEdge {
kind: "Object",
name: "ReviewEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node
}
}