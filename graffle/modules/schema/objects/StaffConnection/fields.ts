import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StaffConnection"`
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
value: "StaffConnection"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StaffConnection} |
* | **Path** | `StaffConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface edges {
kind: "OutputField",
name: "edges",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StaffEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StaffConnection} |
* | **Path** | `StaffConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface nodes {
kind: "OutputField",
name: "nodes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffConnection}.
*
* The pagination information
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StaffConnection} |
* | **Path** | `StaffConnection.pageInfo` |
* | **Nullability** | Optional |
*/
export interface pageInfo {
kind: "OutputField",
name: "pageInfo",
arguments: {},
inlineType: [0, ],
namedType: $Schema.PageInfo
}
