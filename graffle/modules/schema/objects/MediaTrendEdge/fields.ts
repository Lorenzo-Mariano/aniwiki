import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaTrendEdge"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "MediaTrendEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrendEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrend} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaTrendEdge} |
* | **Path** | `MediaTrendEdge.node` |
* | **Nullability** | Optional |
*/
export interface node {
kind: "OutputField",
name: "node",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaTrend
}
