import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Query from './__.js'

/**
* GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
*/
export interface Query<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.RootObjectLike {

      /**
* ```graphql
* Page(page: Int, perPage: Int): Page
*
* type Page {
* pageInfo: PageInfo
* users(id: Int, name: String, isModerator: Boolean, search: String, sort: [UserSort]): [User]
* media(id: Int, idMal: Int, startDate: FuzzyDateInt, endDate: FuzzyDateInt, season: MediaSeason, seasonYear: Int, type: MediaType, format: MediaFormat, status: MediaStatus, episodes: Int, duration: Int, chapters: Int, volumes: Int, isAdult: Boolean, genre: String, tag: String, minimumTagRank: Int, tagCategory: String, onList: Boolean, licensedBy: String, licensedById: Int, averageScore: Int, popularity: Int, source: MediaSource, countryOfOrigin: CountryCode, isLicensed: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], idMal_not: Int, idMal_in: [Int], idMal_not_in: [Int], startDate_greater: FuzzyDateInt, startDate_lesser: FuzzyDateInt, startDate_like: String, endDate_greater: FuzzyDateInt, endDate_lesser: FuzzyDateInt, endDate_like: String, format_in: [MediaFormat], format_not: MediaFormat, format_not_in: [MediaFormat], status_in: [MediaStatus], status_not: MediaStatus, status_not_in: [MediaStatus], episodes_greater: Int, episodes_lesser: Int, duration_greater: Int, duration_lesser: Int, chapters_greater: Int, chapters_lesser: Int, volumes_greater: Int, volumes_lesser: Int, genre_in: [String], genre_not_in: [String], tag_in: [String], tag_not_in: [String], tagCategory_in: [String], tagCategory_not_in: [String], licensedBy_in: [String], licensedById_in: [Int], averageScore_not: Int, averageScore_greater: Int, averageScore_lesser: Int, popularity_not: Int, popularity_greater: Int, popularity_lesser: Int, source_in: [MediaSource], sort: [MediaSort]): [Media]
* characters(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [CharacterSort]): [Character]
* staff(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StaffSort]): [Staff]
* studios(id: Int, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StudioSort]): [Studio]
* mediaList(id: Int, userId: Int, userName: String, type: MediaType, status: MediaListStatus, mediaId: Int, isFollowing: Boolean, notes: String, startedAt: FuzzyDateInt, completedAt: FuzzyDateInt, compareWithAuthList: Boolean, userId_in: [Int], status_in: [MediaListStatus], status_not_in: [MediaListStatus], status_not: MediaListStatus, mediaId_in: [Int], mediaId_not_in: [Int], notes_like: String, startedAt_greater: FuzzyDateInt, startedAt_lesser: FuzzyDateInt, startedAt_like: String, completedAt_greater: FuzzyDateInt, completedAt_lesser: FuzzyDateInt, completedAt_like: String, sort: [MediaListSort]): [MediaList]
* airingSchedules(id: Int, mediaId: Int, episode: Int, airingAt: Int, notYetAired: Boolean, id_not: Int, id_in: [Int], id_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], episode_not: Int, episode_in: [Int], episode_not_in: [Int], episode_greater: Int, episode_lesser: Int, airingAt_greater: Int, airingAt_lesser: Int, sort: [AiringSort]): [AiringSchedule]
* mediaTrends(mediaId: Int, date: Int, trending: Int, averageScore: Int, popularity: Int, episode: Int, releasing: Boolean, mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], date_greater: Int, date_lesser: Int, trending_greater: Int, trending_lesser: Int, trending_not: Int, averageScore_greater: Int, averageScore_lesser: Int, averageScore_not: Int, popularity_greater: Int, popularity_lesser: Int, popularity_not: Int, episode_greater: Int, episode_lesser: Int, episode_not: Int, sort: [MediaTrendSort]): [MediaTrend]
* notifications(type: NotificationType, resetNotificationCount: Boolean, type_in: [NotificationType]): [NotificationUnion]
* followers(userId: Int!, sort: [UserSort]): [User]
* following(userId: Int!, sort: [UserSort]): [User]
* activities(id: Int, userId: Int, messengerId: Int, mediaId: Int, type: ActivityType, isFollowing: Boolean, hasReplies: Boolean, hasRepliesOrTypeText: Boolean, createdAt: Int, id_not: Int, id_in: [Int], id_not_in: [Int], userId_not: Int, userId_in: [Int], userId_not_in: [Int], messengerId_not: Int, messengerId_in: [Int], messengerId_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], type_not: ActivityType, type_in: [ActivityType], type_not_in: [ActivityType], createdAt_greater: Int, createdAt_lesser: Int, sort: [ActivitySort]): [ActivityUnion]
* activityReplies(id: Int, activityId: Int): [ActivityReply]
* threads(id: Int, userId: Int, replyUserId: Int, subscribed: Boolean, categoryId: Int, mediaCategoryId: Int, search: String, id_in: [Int], sort: [ThreadSort]): [Thread]
* threadComments(id: Int, threadId: Int, userId: Int, sort: [ThreadCommentSort]): [ThreadComment]
* reviews(id: Int, mediaId: Int, userId: Int, mediaType: MediaType, sort: [ReviewSort]): [Review]
* recommendations(id: Int, mediaId: Int, mediaRecommendationId: Int, userId: Int, rating: Int, onList: Boolean, rating_greater: Int, rating_lesser: Int, sort: [RecommendationSort]): [Recommendation]
* likes(likeableId: Int, type: LikeableType): [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Page} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Page` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
Page?: $Fields.Page.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Page<_$Context>>
/**
* Media query
*
* ```graphql
* Media(id: Int, idMal: Int, startDate: FuzzyDateInt, endDate: FuzzyDateInt, season: MediaSeason, seasonYear: Int, type: MediaType, format: MediaFormat, status: MediaStatus, episodes: Int, duration: Int, chapters: Int, volumes: Int, isAdult: Boolean, genre: String, tag: String, minimumTagRank: Int, tagCategory: String, onList: Boolean, licensedBy: String, licensedById: Int, averageScore: Int, popularity: Int, source: MediaSource, countryOfOrigin: CountryCode, isLicensed: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], idMal_not: Int, idMal_in: [Int], idMal_not_in: [Int], startDate_greater: FuzzyDateInt, startDate_lesser: FuzzyDateInt, startDate_like: String, endDate_greater: FuzzyDateInt, endDate_lesser: FuzzyDateInt, endDate_like: String, format_in: [MediaFormat], format_not: MediaFormat, format_not_in: [MediaFormat], status_in: [MediaStatus], status_not: MediaStatus, status_not_in: [MediaStatus], episodes_greater: Int, episodes_lesser: Int, duration_greater: Int, duration_lesser: Int, chapters_greater: Int, chapters_lesser: Int, volumes_greater: Int, volumes_lesser: Int, genre_in: [String], genre_not_in: [String], tag_in: [String], tag_not_in: [String], tagCategory_in: [String], tagCategory_not_in: [String], licensedBy_in: [String], licensedById_in: [Int], averageScore_not: Int, averageScore_greater: Int, averageScore_lesser: Int, popularity_not: Int, popularity_greater: Int, popularity_lesser: Int, source_in: [MediaSource], sort: [MediaSort]): Media
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Media` |
* | **Nullability** | Optional |
* | **Arguments** | 69 |
*/
Media?: $Fields.Media.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Media<_$Context>>
/**
* Media Trend query
*
* ```graphql
* MediaTrend(mediaId: Int, date: Int, trending: Int, averageScore: Int, popularity: Int, episode: Int, releasing: Boolean, mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], date_greater: Int, date_lesser: Int, trending_greater: Int, trending_lesser: Int, trending_not: Int, averageScore_greater: Int, averageScore_lesser: Int, averageScore_not: Int, popularity_greater: Int, popularity_lesser: Int, popularity_not: Int, episode_greater: Int, episode_lesser: Int, episode_not: Int, sort: [MediaTrendSort]): MediaTrend
*
* type MediaTrend {
* mediaId: Int!
* date: Int!
* trending: Int!
* averageScore: Int
* popularity: Int
* inProgress: Int
* releasing: Boolean!
* episode: Int
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaTrend} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.MediaTrend` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*/
MediaTrend?: $Fields.MediaTrend.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.MediaTrend<_$Context>>
/**
* Airing schedule query
*
* ```graphql
* AiringSchedule(id: Int, mediaId: Int, episode: Int, airingAt: Int, notYetAired: Boolean, id_not: Int, id_in: [Int], id_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], episode_not: Int, episode_in: [Int], episode_not_in: [Int], episode_greater: Int, episode_lesser: Int, airingAt_greater: Int, airingAt_lesser: Int, sort: [AiringSort]): AiringSchedule
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.AiringSchedule` |
* | **Nullability** | Optional |
* | **Arguments** | 19 |
*/
AiringSchedule?: $Fields.AiringSchedule.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.AiringSchedule<_$Context>>
/**
* Character query
*
* ```graphql
* Character(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [CharacterSort]): Character
*
* type Character {
* id: Int!
* name: CharacterName
* image: CharacterImage
* description(asHtml: Boolean): String
* gender: String
* dateOfBirth: FuzzyDate
* age: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* media(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Character` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
Character?: $Fields.Character.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Character<_$Context>>
/**
* Staff query
*
* ```graphql
* Staff(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StaffSort]): Staff
*
* type Staff {
* id: Int!
* name: StaffName
* language: StaffLanguage @deprecated(reason: "Replaced with languageV2")
* languageV2: String
* image: StaffImage
* description(asHtml: Boolean): String
* primaryOccupations: [String]
* gender: String
* dateOfBirth: FuzzyDate
* dateOfDeath: FuzzyDate
* age: Int
* yearsActive: [Int]
* homeTown: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* staffMedia(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* characters(sort: [CharacterSort], page: Int, perPage: Int): CharacterConnection
* characterMedia(sort: [MediaSort], onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* staff: Staff
* submitter: User
* submissionStatus: Int
* submissionNotes: String
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Staff` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
Staff?: $Fields.Staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Staff<_$Context>>
/**
* Media list query
*
* ```graphql
* MediaList(id: Int, userId: Int, userName: String, type: MediaType, status: MediaListStatus, mediaId: Int, isFollowing: Boolean, notes: String, startedAt: FuzzyDateInt, completedAt: FuzzyDateInt, compareWithAuthList: Boolean, userId_in: [Int], status_in: [MediaListStatus], status_not_in: [MediaListStatus], status_not: MediaListStatus, mediaId_in: [Int], mediaId_not_in: [Int], notes_like: String, startedAt_greater: FuzzyDateInt, startedAt_lesser: FuzzyDateInt, startedAt_like: String, completedAt_greater: FuzzyDateInt, completedAt_lesser: FuzzyDateInt, completedAt_like: String, sort: [MediaListSort]): MediaList
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.MediaList` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*/
MediaList?: $Fields.MediaList.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.MediaList<_$Context>>
/**
* Media list collection query, provides list pre-grouped by status & custom
* lists. User ID and Media Type arguments required.
*
* ```graphql
* MediaListCollection(userId: Int, userName: String, type: MediaType, status: MediaListStatus, notes: String, startedAt: FuzzyDateInt, completedAt: FuzzyDateInt, forceSingleCompletedList: Boolean, chunk: Int, perChunk: Int, status_in: [MediaListStatus], status_not_in: [MediaListStatus], status_not: MediaListStatus, notes_like: String, startedAt_greater: FuzzyDateInt, startedAt_lesser: FuzzyDateInt, startedAt_like: String, completedAt_greater: FuzzyDateInt, completedAt_lesser: FuzzyDateInt, completedAt_like: String, sort: [MediaListSort]): MediaListCollection
*
* type MediaListCollection {
* lists: [MediaListGroup]
* user: User
* hasNextChunk: Boolean
* statusLists(asArray: Boolean): [[MediaList]] @deprecated(reason: "Not GraphQL spec compliant, use lists field instead.")
* customLists(asArray: Boolean): [[MediaList]] @deprecated(reason: "Not GraphQL spec compliant, use lists field instead.")
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaListCollection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.MediaListCollection` |
* | **Nullability** | Optional |
* | **Arguments** | 21 |
*/
MediaListCollection?: $Fields.MediaListCollection.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.MediaListCollection<_$Context>>
/**
* Collection of all the possible media genres
*
* ```graphql
* GenreCollection: [String]
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.GenreCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
GenreCollection?: $Fields.GenreCollection.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.GenreCollection<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Collection of all the possible media tags
*
* ```graphql
* MediaTagCollection(status: Int): [MediaTag]
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.MediaTagCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*/
MediaTagCollection?: $Fields.MediaTagCollection.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.MediaTagCollection<_$Context>>
/**
* User query
*
* ```graphql
* User(id: Int, name: String, isModerator: Boolean, search: String, sort: [UserSort]): User
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.User` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
User?: $Fields.User.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.User<_$Context>>
/**
* Get the currently authenticated user
*
* ```graphql
* Viewer: User
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Viewer` |
* | **Nullability** | Optional |
*/
Viewer?: $Fields.Viewer.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Viewer<_$Context>>
/**
* Notification query
*
* ```graphql
* Notification(type: NotificationType, resetNotificationCount: Boolean, type_in: [NotificationType]): NotificationUnion
*
* union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification | MediaSubmissionUpdateNotification | StaffSubmissionUpdateNotification | CharacterSubmissionUpdateNotification
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$NotificationUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Notification` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
Notification?: $Fields.Notification.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Notification<_$Context>>
/**
* Studio query
*
* ```graphql
* Studio(id: Int, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StudioSort]): Studio
*
* type Studio {
* id: Int!
* name: String!
* isAnimationStudio: Boolean!
* media(sort: [MediaSort], isMain: Boolean, onList: Boolean, page: Int, perPage: Int): MediaConnection
* siteUrl: String
* isFavourite: Boolean!
* favourites: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Studio` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
Studio?: $Fields.Studio.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Studio<_$Context>>
/**
* Review query
*
* ```graphql
* Review(id: Int, mediaId: Int, userId: Int, mediaType: MediaType, sort: [ReviewSort]): Review
*
* type Review {
* id: Int!
* userId: Int!
* mediaId: Int!
* mediaType: MediaType
* summary: String
* body(asHtml: Boolean): String
* rating: Int
* ratingAmount: Int
* userRating: ReviewRating
* score: Int
* private: Boolean
* siteUrl: String
* createdAt: Int!
* updatedAt: Int!
* user: User
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Review` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
Review?: $Fields.Review.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Review<_$Context>>
/**
* Activity query
*
* ```graphql
* Activity(id: Int, userId: Int, messengerId: Int, mediaId: Int, type: ActivityType, isFollowing: Boolean, hasReplies: Boolean, hasRepliesOrTypeText: Boolean, createdAt: Int, id_not: Int, id_in: [Int], id_not_in: [Int], userId_not: Int, userId_in: [Int], userId_not_in: [Int], messengerId_not: Int, messengerId_in: [Int], messengerId_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], type_not: ActivityType, type_in: [ActivityType], type_not_in: [ActivityType], createdAt_greater: Int, createdAt_lesser: Int, sort: [ActivitySort]): ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Activity` |
* | **Nullability** | Optional |
* | **Arguments** | 27 |
*/
Activity?: $Fields.Activity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Activity<_$Context>>
/**
* Activity reply query
*
* ```graphql
* ActivityReply(id: Int, activityId: Int): ActivityReply
*
* type ActivityReply {
* id: Int!
* userId: Int
* activityId: Int
* text(asHtml: Boolean): String
* likeCount: Int!
* isLiked: Boolean
* createdAt: Int!
* user: User
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.ActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
ActivityReply?: $Fields.ActivityReply.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ActivityReply<_$Context>>
/**
* Following query
*
* ```graphql
* Following(userId: Int!, sort: [UserSort]): User
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Following` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
Following?: $Fields.Following<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Following<_$Context>>
/**
* Follower query
*
* ```graphql
* Follower(userId: Int!, sort: [UserSort]): User
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Follower` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
Follower?: $Fields.Follower<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Follower<_$Context>>
/**
* Thread query
*
* ```graphql
* Thread(id: Int, userId: Int, replyUserId: Int, subscribed: Boolean, categoryId: Int, mediaCategoryId: Int, search: String, id_in: [Int], sort: [ThreadSort]): Thread
*
* type Thread {
* id: Int!
* title: String
* body(asHtml: Boolean): String
* userId: Int!
* replyUserId: Int
* replyCommentId: Int
* replyCount: Int
* viewCount: Int
* isLocked: Boolean
* isSticky: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* repliedAt: Int
* createdAt: Int!
* updatedAt: Int!
* user: User
* replyUser: User
* likes: [User]
* siteUrl: String
* categories: [ThreadCategory]
* mediaCategories: [Media]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Thread` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*/
Thread?: $Fields.Thread.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Thread<_$Context>>
/**
* Comment query
*
* ```graphql
* ThreadComment(id: Int, threadId: Int, userId: Int, sort: [ThreadCommentSort]): [ThreadComment]
*
* type ThreadComment {
* id: Int!
* userId: Int
* threadId: Int
* comment(asHtml: Boolean): String
* likeCount: Int!
* isLiked: Boolean
* siteUrl: String
* createdAt: Int!
* updatedAt: Int!
* thread: Thread
* user: User
* likes: [User]
* childComments: Json
* isLocked: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ThreadComment}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.ThreadComment` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 4 |
*/
ThreadComment?: $Fields.ThreadComment.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ThreadComment<_$Context>>
/**
* Recommendation query
*
* ```graphql
* Recommendation(id: Int, mediaId: Int, mediaRecommendationId: Int, userId: Int, rating: Int, onList: Boolean, rating_greater: Int, rating_lesser: Int, sort: [RecommendationSort]): Recommendation
*
* type Recommendation {
* id: Int!
* rating: Int
* userRating: RecommendationRating
* media: Media
* mediaRecommendation: Media
* user: User
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Recommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*/
Recommendation?: $Fields.Recommendation.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Recommendation<_$Context>>
/**
* Like query
*
* ```graphql
* Like(likeableId: Int, type: LikeableType): User
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Like` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
Like?: $Fields.Like.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Like<_$Context>>
/**
* Provide AniList markdown to be converted to html (Requires auth)
*
* ```graphql
* Markdown(markdown: String!): ParsedMarkdown
*
* type ParsedMarkdown {
* html: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ParsedMarkdown} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.Markdown` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
Markdown?: $Fields.Markdown<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.Markdown<_$Context>>
/**
* ```graphql
* AniChartUser: AniChartUser
*
* type AniChartUser {
* user: User
* settings: Json
* highlights: Json
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$AniChartUser} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.AniChartUser` |
* | **Nullability** | Optional |
*/
AniChartUser?: $Fields.AniChartUser.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.AniChartUser<_$Context>>
/**
* Site statistics query
*
* ```graphql
* SiteStatistics: SiteStatistics
*
* type SiteStatistics {
* users(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* anime(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* manga(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* characters(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* staff(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* studios(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* reviews(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.SiteStatistics` |
* | **Nullability** | Optional |
*/
SiteStatistics?: $Fields.SiteStatistics.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SiteStatistics<_$Context>>
/**
* ExternalLinkSource collection query
*
* ```graphql
* ExternalLinkSourceCollection(id: Int, type: ExternalLinkType, mediaType: ExternalLinkMediaType): [MediaExternalLink]
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
* | **Parent** | {@link $NamedTypes.$Query} |
* | **Path** | `Query.ExternalLinkSourceCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 3 |
*/
ExternalLinkSourceCollection?: $Fields.ExternalLinkSourceCollection.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ExternalLinkSourceCollection<_$Context>>
      
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