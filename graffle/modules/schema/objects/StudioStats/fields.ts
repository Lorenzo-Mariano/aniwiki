import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StudioStats"`
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
value: "StudioStats"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StudioStats} |
* | **Path** | `StudioStats.studio` |
* | **Nullability** | Optional |
*/
export interface studio {
kind: "OutputField",
name: "studio",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Studio
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioStats} |
* | **Path** | `StudioStats.amount` |
* | **Nullability** | Optional |
*/
export interface amount {
kind: "OutputField",
name: "amount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioStats} |
* | **Path** | `StudioStats.meanScore` |
* | **Nullability** | Optional |
*/
export interface meanScore {
kind: "OutputField",
name: "meanScore",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioStats}.
*
* The amount of time in minutes the studio's works have been watched by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioStats} |
* | **Path** | `StudioStats.timeWatched` |
* | **Nullability** | Optional |
*/
export interface timeWatched {
kind: "OutputField",
name: "timeWatched",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
