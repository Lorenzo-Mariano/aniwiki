import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as UserStats from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 17 |
*/
export interface UserStats<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The amount of anime the user has watched in minutes
*
* ```graphql
* watchedTime: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.watchedTime` |
* | **Nullability** | Optional |
*/
watchedTime?: $Fields.watchedTime.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.watchedTime<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of manga chapters the user has read
*
* ```graphql
* chaptersRead: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.chaptersRead` |
* | **Nullability** | Optional |
*/
chaptersRead?: $Fields.chaptersRead.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.chaptersRead<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* activityHistory: [UserActivityHistory]
*
* type UserActivityHistory {
* date: Int
* amount: Int
* level: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserActivityHistory}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.activityHistory` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
activityHistory?: $Fields.activityHistory.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activityHistory<_$Context>>
/**
* ```graphql
* animeStatusDistribution: [StatusDistribution]
*
* type StatusDistribution {
* status: MediaListStatus
* amount: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StatusDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.animeStatusDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
animeStatusDistribution?: $Fields.animeStatusDistribution.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.animeStatusDistribution<_$Context>>
/**
* ```graphql
* mangaStatusDistribution: [StatusDistribution]
*
* type StatusDistribution {
* status: MediaListStatus
* amount: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StatusDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.mangaStatusDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
mangaStatusDistribution?: $Fields.mangaStatusDistribution.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mangaStatusDistribution<_$Context>>
/**
* ```graphql
* animeScoreDistribution: [ScoreDistribution]
*
* type ScoreDistribution {
* score: Int
* amount: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ScoreDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.animeScoreDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
animeScoreDistribution?: $Fields.animeScoreDistribution.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.animeScoreDistribution<_$Context>>
/**
* ```graphql
* mangaScoreDistribution: [ScoreDistribution]
*
* type ScoreDistribution {
* score: Int
* amount: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ScoreDistribution}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.mangaScoreDistribution` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
mangaScoreDistribution?: $Fields.mangaScoreDistribution.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mangaScoreDistribution<_$Context>>
/**
* ```graphql
* animeListScores: ListScoreStats
*
* type ListScoreStats {
* meanScore: Int
* standardDeviation: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ListScoreStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.animeListScores` |
* | **Nullability** | Optional |
*/
animeListScores?: $Fields.animeListScores.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.animeListScores<_$Context>>
/**
* ```graphql
* mangaListScores: ListScoreStats
*
* type ListScoreStats {
* meanScore: Int
* standardDeviation: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ListScoreStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.mangaListScores` |
* | **Nullability** | Optional |
*/
mangaListScores?: $Fields.mangaListScores.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mangaListScores<_$Context>>
/**
* ```graphql
* favouredGenresOverview: [GenreStats]
*
* type GenreStats {
* genre: String
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$GenreStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredGenresOverview` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredGenresOverview?: $Fields.favouredGenresOverview.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredGenresOverview<_$Context>>
/**
* ```graphql
* favouredGenres: [GenreStats]
*
* type GenreStats {
* genre: String
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$GenreStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredGenres` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredGenres?: $Fields.favouredGenres.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredGenres<_$Context>>
/**
* ```graphql
* favouredTags: [TagStats]
*
* type TagStats {
* tag: MediaTag
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$TagStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredTags` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredTags?: $Fields.favouredTags.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredTags<_$Context>>
/**
* ```graphql
* favouredActors: [StaffStats]
*
* type StaffStats {
* staff: Staff
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredActors?: $Fields.favouredActors.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredActors<_$Context>>
/**
* ```graphql
* favouredStaff: [StaffStats]
*
* type StaffStats {
* staff: Staff
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredStaff` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredStaff?: $Fields.favouredStaff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredStaff<_$Context>>
/**
* ```graphql
* favouredStudios: [StudioStats]
*
* type StudioStats {
* studio: Studio
* amount: Int
* meanScore: Int
* timeWatched: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StudioStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredStudios` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredStudios?: $Fields.favouredStudios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredStudios<_$Context>>
/**
* ```graphql
* favouredYears: [YearStats]
*
* type YearStats {
* year: Int
* amount: Int
* meanScore: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$YearStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredYears` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredYears?: $Fields.favouredYears.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredYears<_$Context>>
/**
* ```graphql
* favouredFormats: [FormatStats]
*
* type FormatStats {
* format: MediaFormat
* amount: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$FormatStats}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserStats} |
* | **Path** | `UserStats.favouredFormats` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
favouredFormats?: $Fields.favouredFormats.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favouredFormats<_$Context>>
      
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