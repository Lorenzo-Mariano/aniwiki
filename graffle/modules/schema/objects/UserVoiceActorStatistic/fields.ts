import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserVoiceActorStatistic"`
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
value: "UserVoiceActorStatistic"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.count` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.meanScore` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.minutesWatched` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.chaptersRead` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}[]! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.mediaIds` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.voiceActor` |
* | **Nullability** | Optional |
*/
export interface voiceActor {
kind: "OutputField",
name: "voiceActor",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserVoiceActorStatistic}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}[]! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserVoiceActorStatistic} |
* | **Path** | `UserVoiceActorStatistic.characterIds` |
* | **Nullability** | Required |
* | **List** | Yes |
*/
export interface characterIds {
kind: "OutputField",
name: "characterIds",
arguments: {},
inlineType: [1, [0, ]],
namedType: $Schema.Int
}
