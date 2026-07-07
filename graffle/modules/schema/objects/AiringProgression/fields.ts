import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"AiringProgression"`
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
value: "AiringProgression"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.AiringProgression}.
*
* The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.AiringProgression} |
* | **Path** | `AiringProgression.episode` |
* | **Nullability** | Optional |
*/
export interface episode {
kind: "OutputField",
name: "episode",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Float
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.AiringProgression}.
*
* The average score for the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.AiringProgression} |
* | **Path** | `AiringProgression.score` |
* | **Nullability** | Optional |
*/
export interface score {
kind: "OutputField",
name: "score",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Float
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.AiringProgression}.
*
* The amount of users watching the anime
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.AiringProgression} |
* | **Path** | `AiringProgression.watching` |
* | **Nullability** | Optional |
*/
export interface watching {
kind: "OutputField",
name: "watching",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
