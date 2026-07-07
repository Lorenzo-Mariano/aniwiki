import type * as $Fields from './fields.js'

export * as RecommendationEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Recommendation connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface RecommendationEdge {
kind: "Object",
name: "RecommendationEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node
}
}