import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Review from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A Review that features in an anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 16 |
*/
export interface Review<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the review
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
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the review's creator
*
* ```graphql
* userId: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.userId` |
* | **Nullability** | Required |
*/
userId?: $Fields.userId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.userId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the review's media
*
* ```graphql
* mediaId: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.mediaId` |
* | **Nullability** | Required |
*/
mediaId?: $Fields.mediaId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* For which type of media the review is for
*
* ```graphql
* mediaType: MediaType
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
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.mediaType` |
* | **Nullability** | Optional |
*/
mediaType?: $Fields.mediaType.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaType<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* A short summary of the review
*
* ```graphql
* summary: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.summary` |
* | **Nullability** | Optional |
*/
summary?: $Fields.summary.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.summary<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The main review body text
*
* ```graphql
* body(asHtml: Boolean): String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.body` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
body?: $Fields.body.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.body<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The total user rating of the review
*
* ```graphql
* rating: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.rating` |
* | **Nullability** | Optional |
*/
rating?: $Fields.rating.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.rating<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of user ratings of the review
*
* ```graphql
* ratingAmount: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.ratingAmount` |
* | **Nullability** | Optional |
*/
ratingAmount?: $Fields.ratingAmount.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ratingAmount<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The rating of the review by currently authenticated user
*
* ```graphql
* userRating: ReviewRating
*
* enum ReviewRating {
* NO_VOTE
* UP_VOTE
* DOWN_VOTE
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ReviewRating} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.userRating` |
* | **Nullability** | Optional |
*/
userRating?: $Fields.userRating.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.userRating<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The review score of the media
*
* ```graphql
* score: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.score` |
* | **Nullability** | Optional |
*/
score?: $Fields.score.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.score<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the review is not yet publicly published and is only viewable by creator
*
* ```graphql
* private: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.private` |
* | **Nullability** | Optional |
*/
private?: $Fields.private.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.private<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The url for the review page on the AniList website
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
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.siteUrl` |
* | **Nullability** | Optional |
*/
siteUrl?: $Fields.siteUrl.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.siteUrl<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The time of the thread creation
*
* ```graphql
* createdAt: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.createdAt` |
* | **Nullability** | Required |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The time of the thread last update
*
* ```graphql
* updatedAt: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.updatedAt` |
* | **Nullability** | Required |
*/
updatedAt?: $Fields.updatedAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.updatedAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The creator of the review
*
* ```graphql
* user: User
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.user` |
* | **Nullability** | Optional |
*/
user?: $Fields.user.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.user<_$Context>>
/**
* The media the review is of
*
* ```graphql
* media: Media
*
* type Media {
* id: Int!
* idMal: Int
* title: MediaTitle
* type: MediaType
* format: MediaFormat
* status(version: Int): MediaStatus
* description(asHtml: Boolean): String
* startDate: FuzzyDate
* endDate: FuzzyDate
* season: MediaSeason
* seasonYear: Int
* seasonInt: Int
* episodes: Int
* duration: Int
* chapters: Int
* volumes: Int
* countryOfOrigin: CountryCode
* isLicensed: Boolean
* source(version: Int): MediaSource
* hashtag: String
* trailer: MediaTrailer
* updatedAt: Int
* coverImage: MediaCoverImage
* bannerImage: String
* genres: [String]
* synonyms: [String]
* averageScore: Int
* meanScore: Int
* popularity: Int
* isLocked: Boolean
* trending: Int
* favourites: Int
* tags: [MediaTag]
* relations: MediaConnection
* characters(sort: [CharacterSort], role: CharacterRole, page: Int, perPage: Int): CharacterConnection
* staff(sort: [StaffSort], page: Int, perPage: Int): StaffConnection
* studios(sort: [StudioSort], isMain: Boolean): StudioConnection
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* isAdult: Boolean
* nextAiringEpisode: AiringSchedule
* airingSchedule(notYetAired: Boolean, page: Int, perPage: Int): AiringScheduleConnection
* trends(sort: [MediaTrendSort], releasing: Boolean, page: Int, perPage: Int): MediaTrendConnection
* externalLinks: [MediaExternalLink]
* streamingEpisodes: [MediaStreamingEpisode]
* rankings: [MediaRank]
* mediaListEntry: MediaList
* reviews(limit: Int, sort: [ReviewSort], page: Int, perPage: Int): ReviewConnection
* recommendations(sort: [RecommendationSort], page: Int, perPage: Int): RecommendationConnection
* stats: MediaStats
* siteUrl: String
* autoCreateForumThread: Boolean
* isRecommendationBlocked: Boolean
* isReviewBlocked: Boolean
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Review} |
* | **Path** | `Review.media` |
* | **Nullability** | Optional |
*/
media?: $Fields.media.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.media<_$Context>>
      
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