import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserStats"`
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
value: "UserStats"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* The amount of anime the user has watched in minutes
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.watchedTime` |
* | **Nullability** | Optional |
*/
export interface watchedTime {
kind: "OutputField",
name: "watchedTime",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* The amount of manga chapters the user has read
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.chaptersRead` |
* | **Nullability** | Optional |
*/
export interface chaptersRead {
kind: "OutputField",
name: "chaptersRead",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserActivityHistory}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.activityHistory` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface activityHistory {
kind: "OutputField",
name: "activityHistory",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.UserActivityHistory
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StatusDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.animeStatusDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface animeStatusDistribution {
kind: "OutputField",
name: "animeStatusDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StatusDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StatusDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.mangaStatusDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface mangaStatusDistribution {
kind: "OutputField",
name: "mangaStatusDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StatusDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ScoreDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.animeScoreDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface animeScoreDistribution {
kind: "OutputField",
name: "animeScoreDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ScoreDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ScoreDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.mangaScoreDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface mangaScoreDistribution {
kind: "OutputField",
name: "mangaScoreDistribution",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ScoreDistribution
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListScoreStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.animeListScores` |
* | **Nullability** | Optional |
*/
export interface animeListScores {
kind: "OutputField",
name: "animeListScores",
arguments: {},
inlineType: [0, ],
namedType: $Schema.ListScoreStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListScoreStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.mangaListScores` |
* | **Nullability** | Optional |
*/
export interface mangaListScores {
kind: "OutputField",
name: "mangaListScores",
arguments: {},
inlineType: [0, ],
namedType: $Schema.ListScoreStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.GenreStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredGenresOverview` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredGenresOverview {
kind: "OutputField",
name: "favouredGenresOverview",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.GenreStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.GenreStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredGenres` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredGenres {
kind: "OutputField",
name: "favouredGenres",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.GenreStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.TagStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredTags` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredTags {
kind: "OutputField",
name: "favouredTags",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.TagStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredActors {
kind: "OutputField",
name: "favouredActors",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StaffStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredStaff` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredStaff {
kind: "OutputField",
name: "favouredStaff",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StaffStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StudioStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredStudios` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredStudios {
kind: "OutputField",
name: "favouredStudios",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StudioStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.YearStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredYears {
kind: "OutputField",
name: "favouredYears",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.YearStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStats}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FormatStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStats} |
* | **Path** | `UserStats.favouredFormats` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface favouredFormats {
kind: "OutputField",
name: "favouredFormats",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.FormatStats
}
