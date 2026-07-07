import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserStatistics"`
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
value: "UserStatistics"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.count` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.meanScore` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.standardDeviation` |
* | **Nullability** | Required |
*/
export interface standardDeviation {
kind: "OutputField",
name: "standardDeviation",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Float
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.minutesWatched` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.episodesWatched` |
* | **Nullability** | Required |
*/
export interface episodesWatched {
kind: "OutputField",
name: "episodesWatched",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.chaptersRead` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.volumesRead` |
* | **Nullability** | Required |
*/
export interface volumesRead {
kind: "OutputField",
name: "volumesRead",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserFormatStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.formats` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface formats {
kind: "OutputField",
name: "formats",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserFormatStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStatusStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.statuses` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface statuses {
kind: "OutputField",
name: "statuses",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserStatusStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserScoreStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.scores` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface scores {
kind: "OutputField",
name: "scores",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserScoreStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserLengthStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.lengths` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface lengths {
kind: "OutputField",
name: "lengths",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserLengthStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserReleaseYearStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.releaseYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface releaseYears {
kind: "OutputField",
name: "releaseYears",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserReleaseYearStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStartYearStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.startYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface startYears {
kind: "OutputField",
name: "startYears",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserStartYearStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserGenreStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.genres` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface genres {
kind: "OutputField",
name: "genres",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserGenreStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserTagStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.tags` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface tags {
kind: "OutputField",
name: "tags",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserTagStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserCountryStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.countries` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface countries {
kind: "OutputField",
name: "countries",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserCountryStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserVoiceActorStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.voiceActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface voiceActors {
kind: "OutputField",
name: "voiceActors",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserVoiceActorStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStaffStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.staff` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserStaffStatistic
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStudioStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserStatistics} |
* | **Path** | `UserStatistics.studios` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface studios {
kind: "OutputField",
name: "studios",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserStatisticsSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.UserStudioStatistic
}
