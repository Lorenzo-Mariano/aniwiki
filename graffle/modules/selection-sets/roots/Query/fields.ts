import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type Page<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Page.$SelectionSet<_$Context>

export namespace Page {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Page<_$Context> {
/**
* Arguments for `Page` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Page |
* | **Path** | `Query.Page(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 50
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Page |
* | **Path** | `Query.Page(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `Page` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Media<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Media.$SelectionSet<_$Context>

export namespace Media {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Media<_$Context> {
/**
* Arguments for `Media` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the media's MyAnimeList id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(idMal)` |
* | **Nullability** | Optional |
*/
readonly idMal?: $Scalars.Int<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(startDate)` |
* | **Nullability** | Optional |
*/
readonly startDate?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(endDate)` |
* | **Nullability** | Optional |
*/
readonly endDate?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the season the media was released in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaSeason` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(season)` |
* | **Nullability** | Optional |
*/
readonly $season?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSeason | null | undefined>
/**
* The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(seasonYear)` |
* | **Nullability** | Optional |
*/
readonly seasonYear?: $Scalars.Int<_$Context>
/**
* Filter by the media's type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* Filter by the media's format
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaFormat` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(format)` |
* | **Nullability** | Optional |
*/
readonly $format?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>
/**
* Filter by the media's current release status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(episodes)` |
* | **Nullability** | Optional |
*/
readonly episodes?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(duration)` |
* | **Nullability** | Optional |
*/
readonly duration?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(chapters)` |
* | **Nullability** | Optional |
*/
readonly chapters?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(volumes)` |
* | **Nullability** | Optional |
*/
readonly volumes?: $Scalars.Int<_$Context>
/**
* Filter by if the media's intended for 18+ adult audiences
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(isAdult)` |
* | **Nullability** | Optional |
*/
readonly isAdult?: $Scalars.Boolean<_$Context>
/**
* Filter by the media's genres
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(genre)` |
* | **Nullability** | Optional |
*/
readonly genre?: $Scalars.String<_$Context>
/**
* Filter by the media's tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tag)` |
* | **Nullability** | Optional |
*/
readonly tag?: $Scalars.String<_$Context>
/**
* Only apply the tags filter argument to tags above this rank. Default: 18
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(minimumTagRank)` |
* | **Nullability** | Optional |
*/
readonly minimumTagRank?: $Scalars.Int<_$Context>
/**
* Filter by the media's tags with in a tag category
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tagCategory)` |
* | **Nullability** | Optional |
*/
readonly tagCategory?: $Scalars.String<_$Context>
/**
* Filter by the media on the authenticated user's lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(onList)` |
* | **Nullability** | Optional |
*/
readonly onList?: $Scalars.Boolean<_$Context>
/**
* Filter media by sites name with a online streaming or reading license
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(licensedBy)` |
* | **Nullability** | Optional |
*/
readonly licensedBy?: $Scalars.String<_$Context>
/**
* Filter media by sites id with a online streaming or reading license
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(licensedById)` |
* | **Nullability** | Optional |
*/
readonly licensedById?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(averageScore)` |
* | **Nullability** | Optional |
*/
readonly averageScore?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(popularity)` |
* | **Nullability** | Optional |
*/
readonly popularity?: $Scalars.Int<_$Context>
/**
* Filter by the source type of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaSource` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(source)` |
* | **Nullability** | Optional |
*/
readonly $source?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSource | null | undefined>
/**
* Filter by the media's country of origin
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `CountryCode` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(countryOfOrigin)` |
* | **Nullability** | Optional |
*/
readonly countryOfOrigin?: $Scalars.CountryCode<_$Context>
/**
* If the media is officially licensed or a self-published doujin release
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(isLicensed)` |
* | **Nullability** | Optional |
*/
readonly isLicensed?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's MyAnimeList id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(idMal_not)` |
* | **Nullability** | Optional |
*/
readonly idMal_not?: $Scalars.Int<_$Context>
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(idMal_in)` |
* | **Nullability** | Optional |
*/
readonly idMal_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(idMal_not_in)` |
* | **Nullability** | Optional |
*/
readonly idMal_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(startDate_greater)` |
* | **Nullability** | Optional |
*/
readonly startDate_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(startDate_lesser)` |
* | **Nullability** | Optional |
*/
readonly startDate_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(startDate_like)` |
* | **Nullability** | Optional |
*/
readonly startDate_like?: $Scalars.String<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(endDate_greater)` |
* | **Nullability** | Optional |
*/
readonly endDate_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(endDate_lesser)` |
* | **Nullability** | Optional |
*/
readonly endDate_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(endDate_like)` |
* | **Nullability** | Optional |
*/
readonly endDate_like?: $Scalars.String<_$Context>
/**
* Filter by the media's format (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaFormat]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(format_in)` |
* | **Nullability** | Optional |
*/
readonly $format_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>> | null | undefined>
/**
* Filter by the media's format
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaFormat` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(format_not)` |
* | **Nullability** | Optional |
*/
readonly $format_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>
/**
* Filter by the media's format (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaFormat]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(format_not_in)` |
* | **Nullability** | Optional |
*/
readonly $format_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>> | null | undefined>
/**
* Filter by the media's current release status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(status_in)` |
* | **Nullability** | Optional |
*/
readonly $status_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>> | null | undefined>
/**
* Filter by the media's current release status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(status_not)` |
* | **Nullability** | Optional |
*/
readonly $status_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>
/**
* Filter by the media's current release status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(status_not_in)` |
* | **Nullability** | Optional |
*/
readonly $status_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>> | null | undefined>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(episodes_greater)` |
* | **Nullability** | Optional |
*/
readonly episodes_greater?: $Scalars.Int<_$Context>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(episodes_lesser)` |
* | **Nullability** | Optional |
*/
readonly episodes_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(duration_greater)` |
* | **Nullability** | Optional |
*/
readonly duration_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(duration_lesser)` |
* | **Nullability** | Optional |
*/
readonly duration_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(chapters_greater)` |
* | **Nullability** | Optional |
*/
readonly chapters_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(chapters_lesser)` |
* | **Nullability** | Optional |
*/
readonly chapters_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(volumes_greater)` |
* | **Nullability** | Optional |
*/
readonly volumes_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(volumes_lesser)` |
* | **Nullability** | Optional |
*/
readonly volumes_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's genres (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(genre_in)` |
* | **Nullability** | Optional |
*/
readonly genre_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's genres (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(genre_not_in)` |
* | **Nullability** | Optional |
*/
readonly genre_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tag_in)` |
* | **Nullability** | Optional |
*/
readonly tag_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tag_not_in)` |
* | **Nullability** | Optional |
*/
readonly tag_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tagCategory_in)` |
* | **Nullability** | Optional |
*/
readonly tagCategory_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(tagCategory_not_in)` |
* | **Nullability** | Optional |
*/
readonly tagCategory_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter media by sites name with a online streaming or reading license (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(licensedBy_in)` |
* | **Nullability** | Optional |
*/
readonly licensedBy_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter media by sites id with a online streaming or reading license (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(licensedById_in)` |
* | **Nullability** | Optional |
*/
readonly licensedById_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(averageScore_not)` |
* | **Nullability** | Optional |
*/
readonly averageScore_not?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(averageScore_greater)` |
* | **Nullability** | Optional |
*/
readonly averageScore_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(averageScore_lesser)` |
* | **Nullability** | Optional |
*/
readonly averageScore_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(popularity_not)` |
* | **Nullability** | Optional |
*/
readonly popularity_not?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(popularity_greater)` |
* | **Nullability** | Optional |
*/
readonly popularity_greater?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(popularity_lesser)` |
* | **Nullability** | Optional |
*/
readonly popularity_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the source type of the media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaSource]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(source_in)` |
* | **Nullability** | Optional |
*/
readonly $source_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSource | null | undefined>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Media |
* | **Path** | `Query.Media(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Media` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type MediaTrend<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = MediaTrend.$SelectionSet<_$Context>

export namespace MediaTrend {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaTrend<_$Context> {
/**
* Arguments for `MediaTrend` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(date)` |
* | **Nullability** | Optional |
*/
readonly date?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(trending)` |
* | **Nullability** | Optional |
*/
readonly trending?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(averageScore)` |
* | **Nullability** | Optional |
*/
readonly averageScore?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(popularity)` |
* | **Nullability** | Optional |
*/
readonly popularity?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(episode)` |
* | **Nullability** | Optional |
*/
readonly episode?: $Scalars.Int<_$Context>
/**
* Filter to stats recorded while the media was releasing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(releasing)` |
* | **Nullability** | Optional |
*/
readonly releasing?: $Scalars.Boolean<_$Context>
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(date_greater)` |
* | **Nullability** | Optional |
*/
readonly date_greater?: $Scalars.Int<_$Context>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(date_lesser)` |
* | **Nullability** | Optional |
*/
readonly date_lesser?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(trending_greater)` |
* | **Nullability** | Optional |
*/
readonly trending_greater?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(trending_lesser)` |
* | **Nullability** | Optional |
*/
readonly trending_lesser?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(trending_not)` |
* | **Nullability** | Optional |
*/
readonly trending_not?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(averageScore_greater)` |
* | **Nullability** | Optional |
*/
readonly averageScore_greater?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(averageScore_lesser)` |
* | **Nullability** | Optional |
*/
readonly averageScore_lesser?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(averageScore_not)` |
* | **Nullability** | Optional |
*/
readonly averageScore_not?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(popularity_greater)` |
* | **Nullability** | Optional |
*/
readonly popularity_greater?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(popularity_lesser)` |
* | **Nullability** | Optional |
*/
readonly popularity_lesser?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(popularity_not)` |
* | **Nullability** | Optional |
*/
readonly popularity_not?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(episode_greater)` |
* | **Nullability** | Optional |
*/
readonly episode_greater?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(episode_lesser)` |
* | **Nullability** | Optional |
*/
readonly episode_lesser?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(episode_not)` |
* | **Nullability** | Optional |
*/
readonly episode_not?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaTrendSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTrend |
* | **Path** | `Query.MediaTrend(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaTrendSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `MediaTrend` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type AiringSchedule<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = AiringSchedule.$SelectionSet<_$Context>

export namespace AiringSchedule {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.AiringSchedule<_$Context> {
/**
* Arguments for `AiringSchedule` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the id of the airing schedule item
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the id of associated media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode)` |
* | **Nullability** | Optional |
*/
readonly episode?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(airingAt)` |
* | **Nullability** | Optional |
*/
readonly airingAt?: $Scalars.Int<_$Context>
/**
* Filter to episodes that haven't yet aired
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(notYetAired)` |
* | **Nullability** | Optional |
*/
readonly notYetAired?: $Scalars.Boolean<_$Context>
/**
* Filter by the id of the airing schedule item
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of associated media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of associated media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of associated media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode_not)` |
* | **Nullability** | Optional |
*/
readonly episode_not?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode_in)` |
* | **Nullability** | Optional |
*/
readonly episode_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode_not_in)` |
* | **Nullability** | Optional |
*/
readonly episode_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode_greater)` |
* | **Nullability** | Optional |
*/
readonly episode_greater?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(episode_lesser)` |
* | **Nullability** | Optional |
*/
readonly episode_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(airingAt_greater)` |
* | **Nullability** | Optional |
*/
readonly airingAt_greater?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(airingAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly airingAt_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[AiringSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.AiringSchedule |
* | **Path** | `Query.AiringSchedule(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.AiringSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `AiringSchedule` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Character<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Character.$SelectionSet<_$Context>

export namespace Character {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Character<_$Context> {
/**
* Arguments for `Character` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by character id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by character by if its their birthday today
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(isBirthday)` |
* | **Nullability** | Optional |
*/
readonly isBirthday?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by character id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by character id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by character id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[CharacterSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Character |
* | **Path** | `Query.Character(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.CharacterSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Character` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Staff<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Staff.$SelectionSet<_$Context>

export namespace Staff {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Staff<_$Context> {
/**
* Arguments for `Staff` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the staff id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by staff by if its their birthday today
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(isBirthday)` |
* | **Nullability** | Optional |
*/
readonly isBirthday?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the staff id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the staff id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the staff id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StaffSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Staff |
* | **Path** | `Query.Staff(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Staff` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type MediaList<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = MediaList.$SelectionSet<_$Context>

export namespace MediaList {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaList<_$Context> {
/**
* Arguments for `MediaList` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by a list entry's id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by a user's id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by a user's name
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(userName)` |
* | **Nullability** | Optional |
*/
readonly userName?: $Scalars.String<_$Context>
/**
* Filter by the list entries media type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by the media id of the list entry
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter list entries to users who are being followed by the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(isFollowing)` |
* | **Nullability** | Optional |
*/
readonly isFollowing?: $Scalars.Boolean<_$Context>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(notes)` |
* | **Nullability** | Optional |
*/
readonly notes?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(startedAt)` |
* | **Nullability** | Optional |
*/
readonly startedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(completedAt)` |
* | **Nullability** | Optional |
*/
readonly completedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Limit to only entries also on the auth user's list. Requires user id or name arguments.
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(compareWithAuthList)` |
* | **Nullability** | Optional |
*/
readonly compareWithAuthList?: $Scalars.Boolean<_$Context>
/**
* Filter by a user's id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(userId_in)` |
* | **Nullability** | Optional |
*/
readonly userId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(status_in)` |
* | **Nullability** | Optional |
*/
readonly $status_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(status_not_in)` |
* | **Nullability** | Optional |
*/
readonly $status_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(status_not)` |
* | **Nullability** | Optional |
*/
readonly $status_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by the media id of the list entry (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id of the list entry (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(notes_like)` |
* | **Nullability** | Optional |
*/
readonly notes_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(startedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly startedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(startedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly startedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(startedAt_like)` |
* | **Nullability** | Optional |
*/
readonly startedAt_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(completedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly completedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(completedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly completedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(completedAt_like)` |
* | **Nullability** | Optional |
*/
readonly completedAt_like?: $Scalars.String<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaList |
* | **Path** | `Query.MediaList(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `MediaList` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type MediaListCollection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = MediaListCollection.$SelectionSet<_$Context>

export namespace MediaListCollection {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaListCollection<_$Context> {
/**
* Arguments for `MediaListCollection` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by a user's id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by a user's name
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(userName)` |
* | **Nullability** | Optional |
*/
readonly userName?: $Scalars.String<_$Context>
/**
* Filter by the list entries media type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(notes)` |
* | **Nullability** | Optional |
*/
readonly notes?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(startedAt)` |
* | **Nullability** | Optional |
*/
readonly startedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(completedAt)` |
* | **Nullability** | Optional |
*/
readonly completedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Always return completed list entries in one group, overriding the user's split completed option.
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(forceSingleCompletedList)` |
* | **Nullability** | Optional |
*/
readonly forceSingleCompletedList?: $Scalars.Boolean<_$Context>
/**
* Which chunk of list entries to load
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(chunk)` |
* | **Nullability** | Optional |
*/
readonly chunk?: $Scalars.Int<_$Context>
/**
* The amount of entries per chunk, max 500
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(perChunk)` |
* | **Nullability** | Optional |
*/
readonly perChunk?: $Scalars.Int<_$Context>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(status_in)` |
* | **Nullability** | Optional |
*/
readonly $status_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(status_not_in)` |
* | **Nullability** | Optional |
*/
readonly $status_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(status_not)` |
* | **Nullability** | Optional |
*/
readonly $status_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(notes_like)` |
* | **Nullability** | Optional |
*/
readonly notes_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(startedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly startedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(startedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly startedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(startedAt_like)` |
* | **Nullability** | Optional |
*/
readonly startedAt_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(completedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly completedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(completedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly completedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(completedAt_like)` |
* | **Nullability** | Optional |
*/
readonly completedAt_like?: $Scalars.String<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaListCollection |
* | **Path** | `Query.MediaListCollection(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `MediaListCollection` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type GenreCollection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| GenreCollection.$SelectionSet<_$Context>

export namespace GenreCollection {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `GenreCollection` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type MediaTagCollection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = MediaTagCollection.$SelectionSet<_$Context>

export namespace MediaTagCollection {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaTag<_$Context> {
/**
* Arguments for `MediaTagCollection` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Mod Only
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.MediaTagCollection |
* | **Path** | `Query.MediaTagCollection(status)` |
* | **Nullability** | Optional |
*/
readonly status?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `MediaTagCollection` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type User<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = User.$SelectionSet<_$Context>

export namespace User {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `User` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.User |
* | **Path** | `Query.User(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the name of the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.User |
* | **Path** | `Query.User(name)` |
* | **Nullability** | Optional |
*/
readonly name?: $Scalars.String<_$Context>
/**
* Filter to moderators only if true
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.User |
* | **Path** | `Query.User(isModerator)` |
* | **Nullability** | Optional |
*/
readonly isModerator?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.User |
* | **Path** | `Query.User(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.User |
* | **Path** | `Query.User(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `User` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Viewer<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Viewer.$SelectionSet<_$Context>

export namespace Viewer {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
}

/**
* This is the "expanded" version of the `Viewer` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Notification<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Notification.$SelectionSet<_$Context>

export namespace Notification {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.NotificationUnion<_$Context> {
/**
* Arguments for `Notification` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the type of notifications
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `NotificationType` |
* | **Parent** | {@link $NamedTypes.$Query}.Notification |
* | **Path** | `Query.Notification(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationType | null | undefined>
/**
* Reset the unread notification count to 0 on load
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Notification |
* | **Path** | `Query.Notification(resetNotificationCount)` |
* | **Nullability** | Optional |
*/
readonly resetNotificationCount?: $Scalars.Boolean<_$Context>
/**
* Filter by the type of notifications (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[NotificationType]` |
* | **Parent** | {@link $NamedTypes.$Query}.Notification |
* | **Path** | `Query.Notification(type_in)` |
* | **Nullability** | Optional |
*/
readonly $type_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationType | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Notification` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Studio<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Studio.$SelectionSet<_$Context>

export namespace Studio {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Studio<_$Context> {
/**
* Arguments for `Studio` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the studio id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the studio id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the studio id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the studio id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StudioSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Studio |
* | **Path** | `Query.Studio(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StudioSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Studio` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Review<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Review.$SelectionSet<_$Context>

export namespace Review {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Review<_$Context> {
/**
* Arguments for `Review` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by Review id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Review |
* | **Path** | `Query.Review(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Review |
* | **Path** | `Query.Review(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Review |
* | **Path** | `Query.Review(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by media type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$Query}.Review |
* | **Path** | `Query.Review(mediaType)` |
* | **Nullability** | Optional |
*/
readonly $mediaType?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ReviewSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Review |
* | **Path** | `Query.Review(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ReviewSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Review` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Activity<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Activity.$SelectionSet<_$Context>

export namespace Activity {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityUnion<_$Context> {
/**
* Arguments for `Activity` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the activity id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the owner user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by the id of the user who sent a message
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(messengerId)` |
* | **Nullability** | Optional |
*/
readonly messengerId?: $Scalars.Int<_$Context>
/**
* Filter by the associated media id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by the type of activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ActivityType` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>
/**
* Filter activity to users who are being followed by the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(isFollowing)` |
* | **Nullability** | Optional |
*/
readonly isFollowing?: $Scalars.Boolean<_$Context>
/**
* Filter activity to only activity with replies
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(hasReplies)` |
* | **Nullability** | Optional |
*/
readonly hasReplies?: $Scalars.Boolean<_$Context>
/**
* Filter activity to only activity with replies or is of type text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(hasRepliesOrTypeText)` |
* | **Nullability** | Optional |
*/
readonly hasRepliesOrTypeText?: $Scalars.Boolean<_$Context>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(createdAt)` |
* | **Nullability** | Optional |
*/
readonly createdAt?: $Scalars.Int<_$Context>
/**
* Filter by the activity id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the activity id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the activity id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the owner user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(userId_not)` |
* | **Nullability** | Optional |
*/
readonly userId_not?: $Scalars.Int<_$Context>
/**
* Filter by the owner user id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(userId_in)` |
* | **Nullability** | Optional |
*/
readonly userId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the owner user id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(userId_not_in)` |
* | **Nullability** | Optional |
*/
readonly userId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the user who sent a message
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(messengerId_not)` |
* | **Nullability** | Optional |
*/
readonly messengerId_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(messengerId_in)` |
* | **Nullability** | Optional |
*/
readonly messengerId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(messengerId_not_in)` |
* | **Nullability** | Optional |
*/
readonly messengerId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the associated media id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the associated media id of the activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the associated media id of the activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the type of activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ActivityType` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(type_not)` |
* | **Nullability** | Optional |
*/
readonly $type_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>
/**
* Filter by the type of activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivityType]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(type_in)` |
* | **Nullability** | Optional |
*/
readonly $type_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>> | null | undefined>
/**
* Filter by the type of activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivityType]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(type_not_in)` |
* | **Nullability** | Optional |
*/
readonly $type_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>> | null | undefined>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(createdAt_greater)` |
* | **Nullability** | Optional |
*/
readonly createdAt_greater?: $Scalars.Int<_$Context>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(createdAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly createdAt_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivitySort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Activity |
* | **Path** | `Query.Activity(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivitySort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Activity` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ActivityReply<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ActivityReply.$SelectionSet<_$Context>

export namespace ActivityReply {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityReply<_$Context> {
/**
* Arguments for `ActivityReply` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the reply id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ActivityReply |
* | **Path** | `Query.ActivityReply(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the parent id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ActivityReply |
* | **Path** | `Query.ActivityReply(activityId)` |
* | **Nullability** | Optional |
*/
readonly activityId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `ActivityReply` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Following<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Following.$SelectionSet<_$Context>

export namespace Following {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `Following` field. Some (1/2) arguments are required so you must include this.
*/
readonly $: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* User id of the follower/followed
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int!` |
* | **Parent** | {@link $NamedTypes.$Query}.Following |
* | **Path** | `Query.Following(userId)` |
* | **Nullability** | Required |
*/
readonly userId: $Scalars.Int$NonNull<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Following |
* | **Path** | `Query.Following(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Following` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Follower<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Follower.$SelectionSet<_$Context>

export namespace Follower {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `Follower` field. Some (1/2) arguments are required so you must include this.
*/
readonly $: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* User id of the follower/followed
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int!` |
* | **Parent** | {@link $NamedTypes.$Query}.Follower |
* | **Path** | `Query.Follower(userId)` |
* | **Nullability** | Required |
*/
readonly userId: $Scalars.Int$NonNull<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Follower |
* | **Path** | `Query.Follower(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Follower` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Thread<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Thread.$SelectionSet<_$Context>

export namespace Thread {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Thread<_$Context> {
/**
* Arguments for `Thread` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the thread id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the thread's creator
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the last user to comment on the thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(replyUserId)` |
* | **Nullability** | Optional |
*/
readonly replyUserId?: $Scalars.Int<_$Context>
/**
* Filter by if the currently authenticated user's subscribed threads
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(subscribed)` |
* | **Nullability** | Optional |
*/
readonly subscribed?: $Scalars.Boolean<_$Context>
/**
* Filter by thread category id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(categoryId)` |
* | **Nullability** | Optional |
*/
readonly categoryId?: $Scalars.Int<_$Context>
/**
* Filter by thread media id category
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(mediaCategoryId)` |
* | **Nullability** | Optional |
*/
readonly mediaCategoryId?: $Scalars.Int<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the thread id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ThreadSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Thread |
* | **Path** | `Query.Thread(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Thread` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ThreadComment<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ThreadComment.$SelectionSet<_$Context>

export namespace ThreadComment {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ThreadComment<_$Context> {
/**
* Arguments for `ThreadComment` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the comment id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ThreadComment |
* | **Path** | `Query.ThreadComment(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the thread id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ThreadComment |
* | **Path** | `Query.ThreadComment(threadId)` |
* | **Nullability** | Optional |
*/
readonly threadId?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the comment's creator
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ThreadComment |
* | **Path** | `Query.ThreadComment(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ThreadCommentSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.ThreadComment |
* | **Path** | `Query.ThreadComment(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadCommentSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `ThreadComment` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Recommendation<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Recommendation.$SelectionSet<_$Context>

export namespace Recommendation {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Recommendation<_$Context> {
/**
* Arguments for `Recommendation` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by recommendation id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by media recommendation id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(mediaRecommendationId)` |
* | **Nullability** | Optional |
*/
readonly mediaRecommendationId?: $Scalars.Int<_$Context>
/**
* Filter by user who created the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(rating)` |
* | **Nullability** | Optional |
*/
readonly rating?: $Scalars.Int<_$Context>
/**
* Filter by the media on the authenticated user's lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(onList)` |
* | **Nullability** | Optional |
*/
readonly onList?: $Scalars.Boolean<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(rating_greater)` |
* | **Nullability** | Optional |
*/
readonly rating_greater?: $Scalars.Int<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(rating_lesser)` |
* | **Nullability** | Optional |
*/
readonly rating_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[RecommendationSort]` |
* | **Parent** | {@link $NamedTypes.$Query}.Recommendation |
* | **Path** | `Query.Recommendation(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.RecommendationSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `Recommendation` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Like<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Like.$SelectionSet<_$Context>

export namespace Like {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `Like` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the likeable type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.Like |
* | **Path** | `Query.Like(likeableId)` |
* | **Nullability** | Optional |
*/
readonly likeableId?: $Scalars.Int<_$Context>
/**
* The type of model the id applies to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `LikeableType` |
* | **Parent** | {@link $NamedTypes.$Query}.Like |
* | **Path** | `Query.Like(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.LikeableType | null | undefined>
}

/**
* This is the "expanded" version of the `Like` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type Markdown<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = Markdown.$SelectionSet<_$Context>

export namespace Markdown {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ParsedMarkdown<_$Context> {
/**
* Arguments for `Markdown` field. All arguments are required so you must include this.
*/
readonly $: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The markdown to be parsed to html
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String!` |
* | **Parent** | {@link $NamedTypes.$Query}.Markdown |
* | **Path** | `Query.Markdown(markdown)` |
* | **Nullability** | Required |
*/
readonly markdown: $Scalars.String$NonNull<_$Context>
}

/**
* This is the "expanded" version of the `Markdown` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type AniChartUser<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = AniChartUser.$SelectionSet<_$Context>

export namespace AniChartUser {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.AniChartUser<_$Context> {
}

/**
* This is the "expanded" version of the `AniChartUser` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SiteStatistics<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SiteStatistics.$SelectionSet<_$Context>

export namespace SiteStatistics {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.SiteStatistics<_$Context> {
}

/**
* This is the "expanded" version of the `SiteStatistics` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ExternalLinkSourceCollection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ExternalLinkSourceCollection.$SelectionSet<_$Context>

export namespace ExternalLinkSourceCollection {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaExternalLink<_$Context> {
/**
* Arguments for `ExternalLinkSourceCollection` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the link id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Query}.ExternalLinkSourceCollection |
* | **Path** | `Query.ExternalLinkSourceCollection(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ExternalLinkType` |
* | **Parent** | {@link $NamedTypes.$Query}.ExternalLinkSourceCollection |
* | **Path** | `Query.ExternalLinkSourceCollection(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ExternalLinkType | null | undefined>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ExternalLinkMediaType` |
* | **Parent** | {@link $NamedTypes.$Query}.ExternalLinkSourceCollection |
* | **Path** | `Query.ExternalLinkSourceCollection(mediaType)` |
* | **Nullability** | Optional |
*/
readonly $mediaType?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ExternalLinkMediaType | null | undefined>
}

/**
* This is the "expanded" version of the `ExternalLinkSourceCollection` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

