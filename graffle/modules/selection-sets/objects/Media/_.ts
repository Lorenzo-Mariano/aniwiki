import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Media from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Anime or Manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 55 |
*/
export interface Media<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the media
*
* ```graphql
* id: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The mal id of the media
*
* ```graphql
* idMal: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.idMal` |
* | **Nullability** | Optional |
*/
idMal?: $Fields.idMal.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.idMal<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The official titles of the media in various languages
*
* ```graphql
* title: MediaTitle
*
* type MediaTitle {
* romaji(stylised: Boolean): String
* english(stylised: Boolean): String
* native(stylised: Boolean): String
* userPreferred: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaTitle} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.title` |
* | **Nullability** | Optional |
*/
title?: $Fields.title.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.title<_$Context>>
/**
* The type of the media; anime or manga
*
* ```graphql
* type: MediaType
*
* enum MediaType {
* ANIME
* MANGA
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.type` |
* | **Nullability** | Optional |
*/
type?: $Fields.type.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.type<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The format the media was released in
*
* ```graphql
* format: MediaFormat
*
* enum MediaFormat {
* TV
* TV_SHORT
* MOVIE
* SPECIAL
* OVA
* ONA
* MUSIC
* MANGA
* NOVEL
* ONE_SHOT
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaFormat} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.format` |
* | **Nullability** | Optional |
*/
format?: $Fields.format.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.format<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The current releasing status of the media
*
* ```graphql
* status(version: Int): MediaStatus
*
* enum MediaStatus {
* FINISHED
* RELEASING
* NOT_YET_RELEASED
* CANCELLED
* HIATUS
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.status` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
status?: $Fields.status.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.status<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Short description of the media's story and characters
*
* ```graphql
* description(asHtml: Boolean): String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.description` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
description?: $Fields.description.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.description<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The first official release date of the media
*
* ```graphql
* startDate: FuzzyDate
*
* type FuzzyDate {
* year: Int
* month: Int
* day: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.startDate` |
* | **Nullability** | Optional |
*/
startDate?: $Fields.startDate.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.startDate<_$Context>>
/**
* The last official release date of the media
*
* ```graphql
* endDate: FuzzyDate
*
* type FuzzyDate {
* year: Int
* month: Int
* day: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.endDate` |
* | **Nullability** | Optional |
*/
endDate?: $Fields.endDate.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.endDate<_$Context>>
/**
* The season the media was initially released in
*
* ```graphql
* season: MediaSeason
*
* enum MediaSeason {
* WINTER
* SPRING
* SUMMER
* FALL
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSeason} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.season` |
* | **Nullability** | Optional |
*/
season?: $Fields.season.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.season<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The season year the media was initially released in
*
* ```graphql
* seasonYear: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.seasonYear` |
* | **Nullability** | Optional |
*/
seasonYear?: $Fields.seasonYear.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.seasonYear<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The year & season the media was initially released in
*
* ```graphql
* seasonInt: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.seasonInt` |
* | **Nullability** | Optional |
*/
seasonInt?: $Fields.seasonInt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.seasonInt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of episodes the anime has when complete
*
* ```graphql
* episodes: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.episodes` |
* | **Nullability** | Optional |
*/
episodes?: $Fields.episodes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.episodes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The general length of each anime episode in minutes
*
* ```graphql
* duration: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.duration` |
* | **Nullability** | Optional |
*/
duration?: $Fields.duration.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.duration<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of chapters the manga has when complete
*
* ```graphql
* chapters: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.chapters` |
* | **Nullability** | Optional |
*/
chapters?: $Fields.chapters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.chapters<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of volumes the manga has when complete
*
* ```graphql
* volumes: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.volumes` |
* | **Nullability** | Optional |
*/
volumes?: $Fields.volumes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.volumes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Where the media was created. (ISO 3166-1 alpha-2)
*
* ```graphql
* countryOfOrigin: CountryCode
*
* scalar CountryCode
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CountryCode} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.countryOfOrigin` |
* | **Nullability** | Optional |
*/
countryOfOrigin?: $Fields.countryOfOrigin.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.countryOfOrigin<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media is officially licensed or a self-published doujin release
*
* ```graphql
* isLicensed: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isLicensed` |
* | **Nullability** | Optional |
*/
isLicensed?: $Fields.isLicensed.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isLicensed<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Source type the media was adapted from.
*
* ```graphql
* source(version: Int): MediaSource
*
* enum MediaSource {
* ORIGINAL
* MANGA
* LIGHT_NOVEL
* VISUAL_NOVEL
* VIDEO_GAME
* OTHER
* NOVEL
* DOUJINSHI
* ANIME
* WEB_NOVEL
* LIVE_ACTION
* GAME
* COMIC
* MULTIMEDIA_PROJECT
* PICTURE_BOOK
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSource} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.source` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
source?: $Fields.source.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.source<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Official Twitter hashtags for the media
*
* ```graphql
* hashtag: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.hashtag` |
* | **Nullability** | Optional |
*/
hashtag?: $Fields.hashtag.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.hashtag<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Media trailer or advertisement
*
* ```graphql
* trailer: MediaTrailer
*
* type MediaTrailer {
* id: String
* site: String
* thumbnail: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaTrailer} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.trailer` |
* | **Nullability** | Optional |
*/
trailer?: $Fields.trailer.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.trailer<_$Context>>
/**
* When the media's data was last updated
*
* ```graphql
* updatedAt: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.updatedAt` |
* | **Nullability** | Optional |
*/
updatedAt?: $Fields.updatedAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.updatedAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The cover images of the media
*
* ```graphql
* coverImage: MediaCoverImage
*
* type MediaCoverImage {
* extraLarge: String
* large: String
* medium: String
* color: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaCoverImage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.coverImage` |
* | **Nullability** | Optional |
*/
coverImage?: $Fields.coverImage.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.coverImage<_$Context>>
/**
* The banner image of the media
*
* ```graphql
* bannerImage: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.bannerImage` |
* | **Nullability** | Optional |
*/
bannerImage?: $Fields.bannerImage.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.bannerImage<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The genres of the media
*
* ```graphql
* genres: [String]
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.genres` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
genres?: $Fields.genres.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.genres<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Alternative titles of the media
*
* ```graphql
* synonyms: [String]
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.synonyms` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
synonyms?: $Fields.synonyms.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.synonyms<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* A weighted average score of all the user's scores of the media
*
* ```graphql
* averageScore: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.averageScore` |
* | **Nullability** | Optional |
*/
averageScore?: $Fields.averageScore.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.averageScore<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Mean score of all the user's scores of the media
*
* ```graphql
* meanScore: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.meanScore` |
* | **Nullability** | Optional |
*/
meanScore?: $Fields.meanScore.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.meanScore<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The number of users with the media on their list
*
* ```graphql
* popularity: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.popularity` |
* | **Nullability** | Optional |
*/
popularity?: $Fields.popularity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.popularity<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.
*
* ```graphql
* isLocked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isLocked` |
* | **Nullability** | Optional |
*/
isLocked?: $Fields.isLocked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isLocked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of related activity in the past hour
*
* ```graphql
* trending: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.trending` |
* | **Nullability** | Optional |
*/
trending?: $Fields.trending.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.trending<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of user's who have favourited the media
*
* ```graphql
* favourites: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.favourites` |
* | **Nullability** | Optional |
*/
favourites?: $Fields.favourites.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favourites<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* List of tags that describes elements and themes of the media
*
* ```graphql
* tags: [MediaTag]
*
* type MediaTag {
* id: Int!
* name: String!
* description: String
* category: String
* rank: Int
* isGeneralSpoiler: Boolean
* isMediaSpoiler: Boolean
* isAdult: Boolean
* userId: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaTag}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.tags` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
tags?: $Fields.tags.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.tags<_$Context>>
/**
* Other media in the same or connecting franchise
*
* ```graphql
* relations: MediaConnection
*
* type MediaConnection {
* edges: [MediaEdge]
* nodes: [Media]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.relations` |
* | **Nullability** | Optional |
*/
relations?: $Fields.relations.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.relations<_$Context>>
/**
* The characters in the media
*
* ```graphql
* characters(sort: [CharacterSort], role: CharacterRole, page: Int, perPage: Int): CharacterConnection
*
* type CharacterConnection {
* edges: [CharacterEdge]
* nodes: [Character]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
characters?: $Fields.characters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characters<_$Context>>
/**
* The staff who produced the media
*
* ```graphql
* staff(sort: [StaffSort], page: Int, perPage: Int): StaffConnection
*
* type StaffConnection {
* edges: [StaffEdge]
* nodes: [Staff]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.staff` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* The companies who produced the media
*
* ```graphql
* studios(sort: [StudioSort], isMain: Boolean): StudioConnection
*
* type StudioConnection {
* edges: [StudioEdge]
* nodes: [Studio]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StudioConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
/**
* If the media is marked as favourite by the current authenticated user
*
* ```graphql
* isFavourite: Boolean!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isFavourite` |
* | **Nullability** | Required |
*/
isFavourite?: $Fields.isFavourite.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isFavourite<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media is blocked from being added to favourites
*
* ```graphql
* isFavouriteBlocked: Boolean!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isFavouriteBlocked` |
* | **Nullability** | Required |
*/
isFavouriteBlocked?: $Fields.isFavouriteBlocked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isFavouriteBlocked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media is intended only for 18+ adult audiences
*
* ```graphql
* isAdult: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isAdult` |
* | **Nullability** | Optional |
*/
isAdult?: $Fields.isAdult.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isAdult<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The media's next episode airing schedule
*
* ```graphql
* nextAiringEpisode: AiringSchedule
*
* type AiringSchedule {
* id: Int!
* airingAt: Int!
* timeUntilAiring: Int!
* episode: Int!
* mediaId: Int!
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$AiringSchedule} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.nextAiringEpisode` |
* | **Nullability** | Optional |
*/
nextAiringEpisode?: $Fields.nextAiringEpisode.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.nextAiringEpisode<_$Context>>
/**
* The media's entire airing schedule
*
* ```graphql
* airingSchedule(notYetAired: Boolean, page: Int, perPage: Int): AiringScheduleConnection
*
* type AiringScheduleConnection {
* edges: [AiringScheduleEdge]
* nodes: [AiringSchedule]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$AiringScheduleConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.airingSchedule` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
airingSchedule?: $Fields.airingSchedule.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.airingSchedule<_$Context>>
/**
* The media's daily trend stats
*
* ```graphql
* trends(sort: [MediaTrendSort], releasing: Boolean, page: Int, perPage: Int): MediaTrendConnection
*
* type MediaTrendConnection {
* edges: [MediaTrendEdge]
* nodes: [MediaTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.trends` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
trends?: $Fields.trends.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.trends<_$Context>>
/**
* External links to another site related to the media
*
* ```graphql
* externalLinks: [MediaExternalLink]
*
* type MediaExternalLink {
* id: Int!
* url: String
* site: String!
* siteId: Int
* type: ExternalLinkType
* language: String
* color: String
* icon: String
* notes: String
* isDisabled: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaExternalLink}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.externalLinks` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
externalLinks?: $Fields.externalLinks.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.externalLinks<_$Context>>
/**
* Data and links to legal streaming episodes on external sites
*
* ```graphql
* streamingEpisodes: [MediaStreamingEpisode]
*
* type MediaStreamingEpisode {
* title: String
* thumbnail: String
* url: String
* site: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaStreamingEpisode}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.streamingEpisodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
streamingEpisodes?: $Fields.streamingEpisodes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.streamingEpisodes<_$Context>>
/**
* The ranking of the media in a particular time span and format compared to other media
*
* ```graphql
* rankings: [MediaRank]
*
* type MediaRank {
* id: Int!
* rank: Int!
* type: MediaRankType!
* format: MediaFormat!
* year: Int
* season: MediaSeason
* allTime: Boolean
* context: String!
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaRank}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.rankings` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
rankings?: $Fields.rankings.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.rankings<_$Context>>
/**
* The authenticated user's media list entry for the media
*
* ```graphql
* mediaListEntry: MediaList
*
* type MediaList {
* id: Int!
* userId: Int!
* mediaId: Int!
* status: MediaListStatus
* score(format: ScoreFormat): Float
* progress: Int
* progressVolumes: Int
* repeat: Int
* priority: Int
* private: Boolean
* notes: String
* hiddenFromStatusLists: Boolean
* customLists(asArray: Boolean): Json
* advancedScores: Json
* startedAt: FuzzyDate
* completedAt: FuzzyDate
* updatedAt: Int
* createdAt: Int
* media: Media
* user: User
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.mediaListEntry` |
* | **Nullability** | Optional |
*/
mediaListEntry?: $Fields.mediaListEntry.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaListEntry<_$Context>>
/**
* User reviews of the media
*
* ```graphql
* reviews(limit: Int, sort: [ReviewSort], page: Int, perPage: Int): ReviewConnection
*
* type ReviewConnection {
* edges: [ReviewEdge]
* nodes: [Review]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ReviewConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.reviews` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
reviews?: $Fields.reviews.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.reviews<_$Context>>
/**
* User recommendations for similar media
*
* ```graphql
* recommendations(sort: [RecommendationSort], page: Int, perPage: Int): RecommendationConnection
*
* type RecommendationConnection {
* edges: [RecommendationEdge]
* nodes: [Recommendation]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$RecommendationConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.recommendations` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
recommendations?: $Fields.recommendations.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.recommendations<_$Context>>
/**
* ```graphql
* stats: MediaStats
*
* type MediaStats {
* scoreDistribution: [ScoreDistribution]
* statusDistribution: [StatusDistribution]
* airingProgression: [AiringProgression] @deprecated(reason: "Replaced by MediaTrends")
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.stats` |
* | **Nullability** | Optional |
*/
stats?: $Fields.stats.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.stats<_$Context>>
/**
* The url for the media page on the AniList website
*
* ```graphql
* siteUrl: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.siteUrl` |
* | **Nullability** | Optional |
*/
siteUrl?: $Fields.siteUrl.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.siteUrl<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media should have forum thread automatically created for it on airing episode release
*
* ```graphql
* autoCreateForumThread: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.autoCreateForumThread` |
* | **Nullability** | Optional |
*/
autoCreateForumThread?: $Fields.autoCreateForumThread.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.autoCreateForumThread<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media is blocked from being recommended to/from
*
* ```graphql
* isRecommendationBlocked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isRecommendationBlocked` |
* | **Nullability** | Optional |
*/
isRecommendationBlocked?: $Fields.isRecommendationBlocked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isRecommendationBlocked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the media is blocked from being reviewed
*
* ```graphql
* isReviewBlocked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.isReviewBlocked` |
* | **Nullability** | Optional |
*/
isReviewBlocked?: $Fields.isReviewBlocked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isReviewBlocked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Notes for site moderators
*
* ```graphql
* modNotes: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Media} |
* | **Path** | `Media.modNotes` |
* | **Nullability** | Optional |
*/
modNotes?: $Fields.modNotes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.modNotes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      
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