import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaStats"`
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
value: "MediaStats"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ScoreDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaStats} |
* | **Path** | `MediaStats.scoreDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface scoreDistribution {
kind: "OutputField",
name: "scoreDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ScoreDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StatusDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaStats} |
* | **Path** | `MediaStats.statusDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface statusDistribution {
kind: "OutputField",
name: "statusDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StatusDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStats}.
*
* @deprecated Replaced by MediaTrends
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AiringProgression}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaStats} |
* | **Path** | `MediaStats.airingProgression` |
* | **⚠ Deprecated** | Replaced by MediaTrends |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface airingProgression {
kind: "OutputField",
name: "airingProgression",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.AiringProgression
}
