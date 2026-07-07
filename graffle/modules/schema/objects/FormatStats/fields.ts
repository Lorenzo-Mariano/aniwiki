import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"FormatStats"`
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
value: "FormatStats"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.FormatStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaFormat} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.FormatStats} |
* | **Path** | `FormatStats.format` |
* | **Nullability** | Optional |
*/
export interface format {
kind: "OutputField",
name: "format",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaFormat
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.FormatStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FormatStats} |
* | **Path** | `FormatStats.amount` |
* | **Nullability** | Optional |
*/
export interface amount {
kind: "OutputField",
name: "amount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
