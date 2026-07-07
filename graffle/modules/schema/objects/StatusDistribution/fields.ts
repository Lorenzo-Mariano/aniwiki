import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StatusDistribution"`
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
value: "StatusDistribution"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StatusDistribution}.
*
* The day the activity took place (Unix timestamp)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.StatusDistribution} |
* | **Path** | `StatusDistribution.status` |
* | **Nullability** | Optional |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListStatus
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StatusDistribution}.
*
* The amount of entries with this status
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StatusDistribution} |
* | **Path** | `StatusDistribution.amount` |
* | **Nullability** | Optional |
*/
export interface amount {
kind: "OutputField",
name: "amount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
