import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"TagStats"`
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
value: "TagStats"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.TagStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTag} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.TagStats} |
* | **Path** | `TagStats.tag` |
* | **Nullability** | Optional |
*/
export interface tag {
kind: "OutputField",
name: "tag",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaTag
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.TagStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.TagStats} |
* | **Path** | `TagStats.amount` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.TagStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.TagStats} |
* | **Path** | `TagStats.meanScore` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.TagStats}.
*
* The amount of time in minutes the tag has been watched by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.TagStats} |
* | **Path** | `TagStats.timeWatched` |
* | **Nullability** | Optional |
*/
export interface timeWatched {
kind: "OutputField",
name: "timeWatched",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
