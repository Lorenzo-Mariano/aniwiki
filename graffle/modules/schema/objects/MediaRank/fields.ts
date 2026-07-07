import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaRank"`
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
value: "MediaRank"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The id of the rank
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.id` |
* | **Nullability** | Required |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The numerical rank of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.rank` |
* | **Nullability** | Required |
*/
export interface rank {
kind: "OutputField",
name: "rank",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The type of ranking
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaRankType}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.type` |
* | **Nullability** | Required |
*/
export interface type {
kind: "OutputField",
name: "type",
arguments: {},
inlineType: [1, ],
namedType: $Schema.MediaRankType
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The format the media is ranked within
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaFormat}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.format` |
* | **Nullability** | Required |
*/
export interface format {
kind: "OutputField",
name: "format",
arguments: {},
inlineType: [1, ],
namedType: $Schema.MediaFormat
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The year the media is ranked within
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.year` |
* | **Nullability** | Optional |
*/
export interface year {
kind: "OutputField",
name: "year",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* The season the media is ranked within
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSeason} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.season` |
* | **Nullability** | Optional |
*/
export interface season {
kind: "OutputField",
name: "season",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaSeason
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* If the ranking is based on all time instead of a season/year
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.allTime` |
* | **Nullability** | Optional |
*/
export interface allTime {
kind: "OutputField",
name: "allTime",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaRank}.
*
* String that gives context to the ranking type and time span
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaRank} |
* | **Path** | `MediaRank.context` |
* | **Nullability** | Required |
*/
export interface context {
kind: "OutputField",
name: "context",
arguments: {},
inlineType: [1, ],
namedType: $Schema.String
}
