import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserStartYearStatistic"`
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
value: "UserStartYearStatistic"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.count` |
* | **Nullability** | Required |
*/
export interface count {
kind: "OutputField",
name: "count",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.meanScore` |
* | **Nullability** | Required |
*/
export interface meanScore {
kind: "OutputField",
name: "meanScore",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Float
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.minutesWatched` |
* | **Nullability** | Required |
*/
export interface minutesWatched {
kind: "OutputField",
name: "minutesWatched",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.chaptersRead` |
* | **Nullability** | Required |
*/
export interface chaptersRead {
kind: "OutputField",
name: "chaptersRead",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}[]! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.mediaIds` |
* | **Nullability** | Required |
* | **List** | Yes |
*/
export interface mediaIds {
kind: "OutputField",
name: "mediaIds",
arguments: {},
inlineType: [1, [0, ]],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStartYearStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStartYearStatistic} |
* | **Path** | `UserStartYearStatistic.startYear` |
* | **Nullability** | Optional |
*/
export interface startYear {
kind: "OutputField",
name: "startYear",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
