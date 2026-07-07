import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"CharacterConnection"`
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
value: "CharacterConnection"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterConnection} |
* | **Path** | `CharacterConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface edges {
kind: "OutputField",
name: "edges",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.CharacterEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterConnection} |
* | **Path** | `CharacterConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface nodes {
kind: "OutputField",
name: "nodes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterConnection}.
*
* The pagination information
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterConnection} |
* | **Path** | `CharacterConnection.pageInfo` |
* | **Nullability** | Optional |
*/
export interface pageInfo {
kind: "OutputField",
name: "pageInfo",
arguments: {},
inlineType: [0, ],
namedType: $Schema.PageInfo
}
