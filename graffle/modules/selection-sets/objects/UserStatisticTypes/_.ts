import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as UserStatisticTypes from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface UserStatisticTypes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* anime: UserStatistics
*
* type UserStatistics {
* count: Int!
* meanScore: Float!
* standardDeviation: Float!
* minutesWatched: Int!
* episodesWatched: Int!
* chaptersRead: Int!
* volumesRead: Int!
* formats(limit: Int, sort: [UserStatisticsSort]): [UserFormatStatistic]
* statuses(limit: Int, sort: [UserStatisticsSort]): [UserStatusStatistic]
* scores(limit: Int, sort: [UserStatisticsSort]): [UserScoreStatistic]
* lengths(limit: Int, sort: [UserStatisticsSort]): [UserLengthStatistic]
* releaseYears(limit: Int, sort: [UserStatisticsSort]): [UserReleaseYearStatistic]
* startYears(limit: Int, sort: [UserStatisticsSort]): [UserStartYearStatistic]
* genres(limit: Int, sort: [UserStatisticsSort]): [UserGenreStatistic]
* tags(limit: Int, sort: [UserStatisticsSort]): [UserTagStatistic]
* countries(limit: Int, sort: [UserStatisticsSort]): [UserCountryStatistic]
* voiceActors(limit: Int, sort: [UserStatisticsSort]): [UserVoiceActorStatistic]
* staff(limit: Int, sort: [UserStatisticsSort]): [UserStaffStatistic]
* studios(limit: Int, sort: [UserStatisticsSort]): [UserStudioStatistic]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatisticTypes} |
* | **Path** | `UserStatisticTypes.anime` |
* | **Nullability** | Optional |
*/
anime?: $Fields.anime.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.anime<_$Context>>
/**
* ```graphql
* manga: UserStatistics
*
* type UserStatistics {
* count: Int!
* meanScore: Float!
* standardDeviation: Float!
* minutesWatched: Int!
* episodesWatched: Int!
* chaptersRead: Int!
* volumesRead: Int!
* formats(limit: Int, sort: [UserStatisticsSort]): [UserFormatStatistic]
* statuses(limit: Int, sort: [UserStatisticsSort]): [UserStatusStatistic]
* scores(limit: Int, sort: [UserStatisticsSort]): [UserScoreStatistic]
* lengths(limit: Int, sort: [UserStatisticsSort]): [UserLengthStatistic]
* releaseYears(limit: Int, sort: [UserStatisticsSort]): [UserReleaseYearStatistic]
* startYears(limit: Int, sort: [UserStatisticsSort]): [UserStartYearStatistic]
* genres(limit: Int, sort: [UserStatisticsSort]): [UserGenreStatistic]
* tags(limit: Int, sort: [UserStatisticsSort]): [UserTagStatistic]
* countries(limit: Int, sort: [UserStatisticsSort]): [UserCountryStatistic]
* voiceActors(limit: Int, sort: [UserStatisticsSort]): [UserVoiceActorStatistic]
* staff(limit: Int, sort: [UserStatisticsSort]): [UserStaffStatistic]
* studios(limit: Int, sort: [UserStatisticsSort]): [UserStudioStatistic]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStatisticTypes} |
* | **Path** | `UserStatisticTypes.manga` |
* | **Nullability** | Optional |
*/
manga?: $Fields.manga.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.manga<_$Context>>
      
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