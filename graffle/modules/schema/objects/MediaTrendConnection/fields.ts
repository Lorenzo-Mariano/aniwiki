import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaTrendConnection"`
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
value: "MediaTrendConnection"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrendConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrendEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaTrendConnection} |
* | **Path** | `MediaTrendConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface edges {
kind: "OutputField",
name: "edges",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaTrendEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrendConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrend}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaTrendConnection} |
* | **Path** | `MediaTrendConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface nodes {
kind: "OutputField",
name: "nodes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaTrend
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrendConnection}.
*
* The pagination information
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaTrendConnection} |
* | **Path** | `MediaTrendConnection.pageInfo` |
* | **Nullability** | Optional |
*/
export interface pageInfo {
kind: "OutputField",
name: "pageInfo",
arguments: {},
inlineType: [0, ],
namedType: $Schema.PageInfo
}
