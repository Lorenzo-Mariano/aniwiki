import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaTitle"`
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
value: "MediaTitle"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTitle}.
*
* The romanization of the native language title
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTitle} |
* | **Path** | `MediaTitle.romaji` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface romaji {
kind: "OutputField",
name: "romaji",
arguments: {
stylised: {
kind: "InputField",
name: "stylised",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTitle}.
*
* The official english title
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTitle} |
* | **Path** | `MediaTitle.english` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface english {
kind: "OutputField",
name: "english",
arguments: {
stylised: {
kind: "InputField",
name: "stylised",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTitle}.
*
* Official title in it's native language
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTitle} |
* | **Path** | `MediaTitle.native` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface native {
kind: "OutputField",
name: "native",
arguments: {
stylised: {
kind: "InputField",
name: "stylised",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTitle}.
*
* The currently authenticated users preferred title language. Default romaji for non-authenticated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTitle} |
* | **Path** | `MediaTitle.userPreferred` |
* | **Nullability** | Optional |
*/
export interface userPreferred {
kind: "OutputField",
name: "userPreferred",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
