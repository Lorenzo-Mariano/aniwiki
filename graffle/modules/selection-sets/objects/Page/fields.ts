import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type pageInfo<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = pageInfo.$SelectionSet<_$Context>

export namespace pageInfo {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.PageInfo<_$Context> {
}

/**
* This is the "expanded" version of the `pageInfo` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type users<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = users.$SelectionSet<_$Context>

export namespace users {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `users` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.users |
* | **Path** | `Page.users(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.users |
* | **Path** | `Page.users(name)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.users |
* | **Path** | `Page.users(isModerator)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.users |
* | **Path** | `Page.users(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.users |
* | **Path** | `Page.users(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `users` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type media<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = media.$SelectionSet<_$Context>

export namespace media {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Media<_$Context> {
/**
* Arguments for `media` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(idMal)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(startDate)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(endDate)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(season)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(seasonYear)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(type)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(format)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(status)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(episodes)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(duration)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(chapters)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(volumes)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(isAdult)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(genre)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tag)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(minimumTagRank)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tagCategory)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(onList)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(licensedBy)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(licensedById)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(averageScore)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(popularity)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(source)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(countryOfOrigin)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(isLicensed)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(idMal_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(idMal_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(idMal_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(startDate_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(startDate_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(startDate_like)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(endDate_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(endDate_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(endDate_like)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(format_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(format_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(format_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(status_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(status_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(status_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(episodes_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(episodes_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(duration_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(duration_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(chapters_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(chapters_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(volumes_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(volumes_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(genre_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(genre_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tag_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tag_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tagCategory_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(tagCategory_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(licensedBy_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(licensedById_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(averageScore_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(averageScore_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(averageScore_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(popularity_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(popularity_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(popularity_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(source_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.media |
* | **Path** | `Page.media(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `media` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type characters<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = characters.$SelectionSet<_$Context>

export namespace characters {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Character<_$Context> {
/**
* Arguments for `characters` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(isBirthday)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.characters |
* | **Path** | `Page.characters(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.CharacterSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `characters` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type staff<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = staff.$SelectionSet<_$Context>

export namespace staff {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Staff<_$Context> {
/**
* Arguments for `staff` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(isBirthday)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.staff |
* | **Path** | `Page.staff(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `staff` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type studios<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = studios.$SelectionSet<_$Context>

export namespace studios {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Studio<_$Context> {
/**
* Arguments for `studios` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.studios |
* | **Path** | `Page.studios(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StudioSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `studios` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type mediaList<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = mediaList.$SelectionSet<_$Context>

export namespace mediaList {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaList<_$Context> {
/**
* Arguments for `mediaList` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(userName)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(type)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(status)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(isFollowing)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(notes)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(startedAt)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(completedAt)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(compareWithAuthList)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(userId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(status_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(status_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(status_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(mediaId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(mediaId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(notes_like)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(startedAt_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(startedAt_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(startedAt_like)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(completedAt_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(completedAt_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(completedAt_like)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaList |
* | **Path** | `Page.mediaList(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `mediaList` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type airingSchedules<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = airingSchedules.$SelectionSet<_$Context>

export namespace airingSchedules {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.AiringSchedule<_$Context> {
/**
* Arguments for `airingSchedules` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(airingAt)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(notYetAired)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(mediaId_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(mediaId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(mediaId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(episode_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(airingAt_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(airingAt_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.airingSchedules |
* | **Path** | `Page.airingSchedules(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.AiringSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `airingSchedules` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type mediaTrends<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = mediaTrends.$SelectionSet<_$Context>

export namespace mediaTrends {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaTrend<_$Context> {
/**
* Arguments for `mediaTrends` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(date)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(trending)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(averageScore)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(popularity)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(episode)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(releasing)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(mediaId_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(mediaId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(mediaId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(date_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(date_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(trending_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(trending_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(trending_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(averageScore_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(averageScore_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(averageScore_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(popularity_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(popularity_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(popularity_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(episode_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(episode_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(episode_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.mediaTrends |
* | **Path** | `Page.mediaTrends(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaTrendSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `mediaTrends` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type notifications<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = notifications.$SelectionSet<_$Context>

export namespace notifications {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.NotificationUnion<_$Context> {
/**
* Arguments for `notifications` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.notifications |
* | **Path** | `Page.notifications(type)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.notifications |
* | **Path** | `Page.notifications(resetNotificationCount)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.notifications |
* | **Path** | `Page.notifications(type_in)` |
* | **Nullability** | Optional |
*/
readonly $type_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationType | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `notifications` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type followers<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = followers.$SelectionSet<_$Context>

export namespace followers {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `followers` field. Some (1/2) arguments are required so you must include this.
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
* | **Parent** | {@link $NamedTypes.$Page}.followers |
* | **Path** | `Page.followers(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.followers |
* | **Path** | `Page.followers(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `followers` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type following<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = following.$SelectionSet<_$Context>

export namespace following {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `following` field. Some (1/2) arguments are required so you must include this.
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
* | **Parent** | {@link $NamedTypes.$Page}.following |
* | **Path** | `Page.following(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.following |
* | **Path** | `Page.following(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `following` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type activities<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = activities.$SelectionSet<_$Context>

export namespace activities {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityUnion<_$Context> {
/**
* Arguments for `activities` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(messengerId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(type)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(isFollowing)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(hasReplies)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(hasRepliesOrTypeText)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(createdAt)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(id_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(id_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(userId_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(userId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(userId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(messengerId_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(messengerId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(messengerId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(mediaId_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(mediaId_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(mediaId_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(type_not)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(type_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(type_not_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(createdAt_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(createdAt_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activities |
* | **Path** | `Page.activities(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivitySort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `activities` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type activityReplies<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = activityReplies.$SelectionSet<_$Context>

export namespace activityReplies {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityReply<_$Context> {
/**
* Arguments for `activityReplies` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.activityReplies |
* | **Path** | `Page.activityReplies(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.activityReplies |
* | **Path** | `Page.activityReplies(activityId)` |
* | **Nullability** | Optional |
*/
readonly activityId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `activityReplies` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type threads<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = threads.$SelectionSet<_$Context>

export namespace threads {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Thread<_$Context> {
/**
* Arguments for `threads` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(replyUserId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(subscribed)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(categoryId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(mediaCategoryId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(search)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(id_in)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threads |
* | **Path** | `Page.threads(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `threads` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type threadComments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = threadComments.$SelectionSet<_$Context>

export namespace threadComments {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ThreadComment<_$Context> {
/**
* Arguments for `threadComments` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.threadComments |
* | **Path** | `Page.threadComments(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threadComments |
* | **Path** | `Page.threadComments(threadId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threadComments |
* | **Path** | `Page.threadComments(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.threadComments |
* | **Path** | `Page.threadComments(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadCommentSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `threadComments` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type reviews<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = reviews.$SelectionSet<_$Context>

export namespace reviews {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Review<_$Context> {
/**
* Arguments for `reviews` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.reviews |
* | **Path** | `Page.reviews(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.reviews |
* | **Path** | `Page.reviews(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.reviews |
* | **Path** | `Page.reviews(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.reviews |
* | **Path** | `Page.reviews(mediaType)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.reviews |
* | **Path** | `Page.reviews(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ReviewSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `reviews` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type recommendations<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = recommendations.$SelectionSet<_$Context>

export namespace recommendations {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Recommendation<_$Context> {
/**
* Arguments for `recommendations` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(id)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(mediaId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(mediaRecommendationId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(userId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(rating)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(onList)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(rating_greater)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(rating_lesser)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.recommendations |
* | **Path** | `Page.recommendations(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.RecommendationSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `recommendations` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type likes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = likes.$SelectionSet<_$Context>

export namespace likes {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `likes` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Page}.likes |
* | **Path** | `Page.likes(likeableId)` |
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
* | **Parent** | {@link $NamedTypes.$Page}.likes |
* | **Path** | `Page.likes(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.LikeableType | null | undefined>
}

/**
* This is the "expanded" version of the `likes` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

