import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserStatisticTypes"`
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
value: "UserStatisticTypes"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatisticTypes}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatisticTypes} |
* | **Path** | `UserStatisticTypes.anime` |
* | **Nullability** | Optional |
*/
export interface anime {
kind: "OutputField",
name: "anime",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserStatistics
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatisticTypes}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatisticTypes} |
* | **Path** | `UserStatisticTypes.manga` |
* | **Nullability** | Optional |
*/
export interface manga {
kind: "OutputField",
name: "manga",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserStatistics
}
