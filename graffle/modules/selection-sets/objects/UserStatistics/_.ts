import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as UserStatistics from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 19 |
*/
export interface UserStatistics<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* count: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.count` |
* | **Nullability** | Required |
*/
count?: $Fields.count.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.count<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* meanScore: Float!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.meanScore` |
* | **Nullability** | Required |
*/
meanScore?: $Fields.meanScore.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.meanScore<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* standardDeviation: Float!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Float}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.standardDeviation` |
* | **Nullability** | Required |
*/
standardDeviation?: $Fields.standardDeviation.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.standardDeviation<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* minutesWatched: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.minutesWatched` |
* | **Nullability** | Required |
*/
minutesWatched?: $Fields.minutesWatched.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.minutesWatched<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* episodesWatched: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.episodesWatched` |
* | **Nullability** | Required |
*/
episodesWatched?: $Fields.episodesWatched.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.episodesWatched<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* chaptersRead: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.chaptersRead` |
* | **Nullability** | Required |
*/
chaptersRead?: $Fields.chaptersRead.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.chaptersRead<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* volumesRead: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.volumesRead` |
* | **Nullability** | Required |
*/
volumesRead?: $Fields.volumesRead.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.volumesRead<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* formats(limit: Int, sort: [UserStatisticsSort]): [UserFormatStatistic]
*
* type UserFormatStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* format: MediaFormat
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserFormatStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.formats` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
formats?: $Fields.formats.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.formats<_$Context>>
/**
* ```graphql
* statuses(limit: Int, sort: [UserStatisticsSort]): [UserStatusStatistic]
*
* type UserStatusStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* status: MediaListStatus
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStatusStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.statuses` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
statuses?: $Fields.statuses.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.statuses<_$Context>>
/**
* ```graphql
* scores(limit: Int, sort: [UserStatisticsSort]): [UserScoreStatistic]
*
* type UserScoreStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* score: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserScoreStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.scores` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
scores?: $Fields.scores.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.scores<_$Context>>
/**
* ```graphql
* lengths(limit: Int, sort: [UserStatisticsSort]): [UserLengthStatistic]
*
* type UserLengthStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* length: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserLengthStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.lengths` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
lengths?: $Fields.lengths.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.lengths<_$Context>>
/**
* ```graphql
* releaseYears(limit: Int, sort: [UserStatisticsSort]): [UserReleaseYearStatistic]
*
* type UserReleaseYearStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* releaseYear: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserReleaseYearStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.releaseYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
releaseYears?: $Fields.releaseYears.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.releaseYears<_$Context>>
/**
* ```graphql
* startYears(limit: Int, sort: [UserStatisticsSort]): [UserStartYearStatistic]
*
* type UserStartYearStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* startYear: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStartYearStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.startYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
startYears?: $Fields.startYears.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.startYears<_$Context>>
/**
* ```graphql
* genres(limit: Int, sort: [UserStatisticsSort]): [UserGenreStatistic]
*
* type UserGenreStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* genre: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserGenreStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.genres` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
genres?: $Fields.genres.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.genres<_$Context>>
/**
* ```graphql
* tags(limit: Int, sort: [UserStatisticsSort]): [UserTagStatistic]
*
* type UserTagStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* tag: MediaTag
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserTagStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.tags` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
tags?: $Fields.tags.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.tags<_$Context>>
/**
* ```graphql
* countries(limit: Int, sort: [UserStatisticsSort]): [UserCountryStatistic]
*
* type UserCountryStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* country: CountryCode
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserCountryStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.countries` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
countries?: $Fields.countries.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.countries<_$Context>>
/**
* ```graphql
* voiceActors(limit: Int, sort: [UserStatisticsSort]): [UserVoiceActorStatistic]
*
* type UserVoiceActorStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* voiceActor: Staff
* characterIds: [Int]!
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserVoiceActorStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.voiceActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
voiceActors?: $Fields.voiceActors.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.voiceActors<_$Context>>
/**
* ```graphql
* staff(limit: Int, sort: [UserStatisticsSort]): [UserStaffStatistic]
*
* type UserStaffStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* staff: Staff
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStaffStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.staff` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* studios(limit: Int, sort: [UserStatisticsSort]): [UserStudioStatistic]
*
* type UserStudioStatistic {
* count: Int!
* meanScore: Float!
* minutesWatched: Int!
* chaptersRead: Int!
* mediaIds: [Int]!
* studio: Studio
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStudioStatistic}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatistics} |
* | **Path** | `UserStatistics.studios` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
      
      /**
* Inline fragments for field groups.
*
* Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
* selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
*/
___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
      /**
* A meta field. Is the name of the type being selected.
*
* @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
*/
__typename?: GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    
}