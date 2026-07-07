import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"CharacterSubmissionConnection"`
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
value: "CharacterSubmissionConnection"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterSubmissionEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface edges {
kind: "OutputField",
name: "edges",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.CharacterSubmissionEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionConnection}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface nodes {
kind: "OutputField",
name: "nodes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.CharacterSubmission
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionConnection}.
*
* The pagination information
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.pageInfo` |
* | **Nullability** | Optional |
*/
export interface pageInfo {
kind: "OutputField",
name: "pageInfo",
arguments: {},
inlineType: [0, ],
namedType: $Schema.PageInfo
}
