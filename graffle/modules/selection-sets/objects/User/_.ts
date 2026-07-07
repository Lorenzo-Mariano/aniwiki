import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as User from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 23 |
*/
export interface User<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the user
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
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The name of the user
*
* ```graphql
* name: String!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.name` |
* | **Nullability** | Required |
*/
name?: $Fields.name.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.name<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The bio written by user (Markdown)
*
* ```graphql
* about(asHtml: Boolean): String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.about` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
about?: $Fields.about.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.about<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's avatar images
*
* ```graphql
* avatar: UserAvatar
*
* type UserAvatar {
* large: String
* medium: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserAvatar} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.avatar` |
* | **Nullability** | Optional |
*/
avatar?: $Fields.avatar.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.avatar<_$Context>>
/**
* The user's banner images
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
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.bannerImage` |
* | **Nullability** | Optional |
*/
bannerImage?: $Fields.bannerImage.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.bannerImage<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the authenticated user if following this user
*
* ```graphql
* isFollowing: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.isFollowing` |
* | **Nullability** | Optional |
*/
isFollowing?: $Fields.isFollowing.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isFollowing<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If this user if following the authenticated user
*
* ```graphql
* isFollower: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.isFollower` |
* | **Nullability** | Optional |
*/
isFollower?: $Fields.isFollower.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isFollower<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the user is blocked by the authenticated user
*
* ```graphql
* isBlocked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.isBlocked` |
* | **Nullability** | Optional |
*/
isBlocked?: $Fields.isBlocked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isBlocked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* bans: Json
*
* scalar Json
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.bans` |
* | **Nullability** | Optional |
*/
bans?: $Fields.bans.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.bans<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's general options
*
* ```graphql
* options: UserOptions
*
* type UserOptions {
* titleLanguage: UserTitleLanguage
* displayAdultContent: Boolean
* airingNotifications: Boolean
* profileColor: String
* notificationOptions: [NotificationOption]
* timezone: String
* activityMergeTime: Int
* staffNameLanguage: UserStaffNameLanguage
* restrictMessagesToFollowing: Boolean
* disabledListActivity: [ListActivityOption]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.options` |
* | **Nullability** | Optional |
*/
options?: $Fields.options.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.options<_$Context>>
/**
* The user's media list options
*
* ```graphql
* mediaListOptions: MediaListOptions
*
* type MediaListOptions {
* scoreFormat: ScoreFormat
* rowOrder: String
* useLegacyLists: Boolean @deprecated(reason: "No longer used")
* animeList: MediaListTypeOptions
* mangaList: MediaListTypeOptions
* sharedTheme: Json @deprecated(reason: "No longer used")
* sharedThemeEnabled: Boolean @deprecated(reason: "No longer used")
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaListOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.mediaListOptions` |
* | **Nullability** | Optional |
*/
mediaListOptions?: $Fields.mediaListOptions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaListOptions<_$Context>>
/**
* The users favourites
*
* ```graphql
* favourites(page: Int): Favourites
*
* type Favourites {
* anime(page: Int, perPage: Int): MediaConnection
* manga(page: Int, perPage: Int): MediaConnection
* characters(page: Int, perPage: Int): CharacterConnection
* staff(page: Int, perPage: Int): StaffConnection
* studios(page: Int, perPage: Int): StudioConnection
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.favourites` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
favourites?: $Fields.favourites.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.favourites<_$Context>>
/**
* The users anime & manga list statistics
*
* ```graphql
* statistics: UserStatisticTypes
*
* type UserStatisticTypes {
* anime: UserStatistics
* manga: UserStatistics
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStatisticTypes} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.statistics` |
* | **Nullability** | Optional |
*/
statistics?: $Fields.statistics.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.statistics<_$Context>>
/**
* The number of unread notifications the user has
*
* ```graphql
* unreadNotificationCount: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.unreadNotificationCount` |
* | **Nullability** | Optional |
*/
unreadNotificationCount?: $Fields.unreadNotificationCount.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.unreadNotificationCount<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The url for the user page on the AniList website
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
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.siteUrl` |
* | **Nullability** | Optional |
*/
siteUrl?: $Fields.siteUrl.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.siteUrl<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The donation tier of the user
*
* ```graphql
* donatorTier: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.donatorTier` |
* | **Nullability** | Optional |
*/
donatorTier?: $Fields.donatorTier.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.donatorTier<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Custom donation badge text
*
* ```graphql
* donatorBadge: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.donatorBadge` |
* | **Nullability** | Optional |
*/
donatorBadge?: $Fields.donatorBadge.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.donatorBadge<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's moderator roles if they are a site moderator
*
* ```graphql
* moderatorRoles: [ModRole]
*
* enum ModRole {
* ADMIN
* LEAD_DEVELOPER
* DEVELOPER
* LEAD_COMMUNITY
* COMMUNITY
* DISCORD_COMMUNITY
* LEAD_ANIME_DATA
* ANIME_DATA
* LEAD_MANGA_DATA
* MANGA_DATA
* LEAD_SOCIAL_MEDIA
* SOCIAL_MEDIA
* RETIRED
* CHARACTER_DATA
* STAFF_DATA
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ModRole}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.moderatorRoles` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
moderatorRoles?: $Fields.moderatorRoles.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.moderatorRoles<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* When the user's account was created. (Does not exist for accounts created before 2020)
*
* ```graphql
* createdAt: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.createdAt` |
* | **Nullability** | Optional |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* When the user's data was last updated
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
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.updatedAt` |
* | **Nullability** | Optional |
*/
updatedAt?: $Fields.updatedAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.updatedAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's statistics
*
* @deprecated Deprecated. Replaced with statistics field.
*
* ```graphql
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
*
* type UserStats {
* watchedTime: Int
* chaptersRead: Int
* activityHistory: [UserActivityHistory]
* animeStatusDistribution: [StatusDistribution]
* mangaStatusDistribution: [StatusDistribution]
* animeScoreDistribution: [ScoreDistribution]
* mangaScoreDistribution: [ScoreDistribution]
* animeListScores: ListScoreStats
* mangaListScores: ListScoreStats
* favouredGenresOverview: [GenreStats]
* favouredGenres: [GenreStats]
* favouredTags: [TagStats]
* favouredActors: [StaffStats]
* favouredStaff: [StaffStats]
* favouredStudios: [StudioStats]
* favouredYears: [YearStats]
* favouredFormats: [FormatStats]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.stats` |
* | **⚠ Deprecated** | Deprecated. Replaced with statistics field. |
* | **Nullability** | Optional |
*/
stats?: $Fields.stats.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.stats<_$Context>>
/**
* If the user is a moderator or data moderator
*
* @deprecated Deprecated. Replaced with moderatorRoles field.
*
* ```graphql
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.moderatorStatus` |
* | **⚠ Deprecated** | Deprecated. Replaced with moderatorRoles field. |
* | **Nullability** | Optional |
*/
moderatorStatus?: $Fields.moderatorStatus.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.moderatorStatus<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's previously used names.
*
* ```graphql
* previousNames: [UserPreviousName]
*
* type UserPreviousName {
* name: String
* createdAt: Int
* updatedAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserPreviousName}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$User} |
* | **Path** | `User.previousNames` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
previousNames?: $Fields.previousNames.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.previousNames<_$Context>>
      
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