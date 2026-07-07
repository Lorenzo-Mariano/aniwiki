import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as InternalPage from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 26 |
*/
export interface InternalPage<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* mediaSubmissions(mediaId: Int, submissionId: Int, userId: Int, assigneeId: Int, status: SubmissionStatus, type: MediaType, sort: [SubmissionSort]): [MediaSubmission]
*
* type MediaSubmission {
* id: Int!
* submitter: User
* assignee: User
* status: SubmissionStatus
* submitterStats: Json
* notes: String
* source: String
* changes: [String]
* locked: Boolean
* media: Media
* submission: Media
* characters: [MediaSubmissionComparison]
* staff: [MediaSubmissionComparison]
* studios: [MediaSubmissionComparison]
* relations: [MediaEdge]
* externalLinks: [MediaSubmissionComparison]
* createdAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.mediaSubmissions` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 7 |
*/
mediaSubmissions?: $Fields.mediaSubmissions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaSubmissions<_$Context>>
/**
* ```graphql
* characterSubmissions(characterId: Int, userId: Int, assigneeId: Int, status: SubmissionStatus, sort: [SubmissionSort]): [CharacterSubmission]
*
* type CharacterSubmission {
* id: Int!
* character: Character
* submission: Character
* submitter: User
* assignee: User
* status: SubmissionStatus
* notes: String
* source: String
* locked: Boolean
* createdAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.characterSubmissions` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
characterSubmissions?: $Fields.characterSubmissions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characterSubmissions<_$Context>>
/**
* ```graphql
* staffSubmissions(staffId: Int, userId: Int, assigneeId: Int, status: SubmissionStatus, sort: [SubmissionSort]): [StaffSubmission]
*
* type StaffSubmission {
* id: Int!
* staff: Staff
* submission: Staff
* submitter: User
* assignee: User
* status: SubmissionStatus
* notes: String
* source: String
* locked: Boolean
* createdAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.staffSubmissions` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
staffSubmissions?: $Fields.staffSubmissions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staffSubmissions<_$Context>>
/**
* ```graphql
* revisionHistory(userId: Int, mediaId: Int, characterId: Int, staffId: Int, studioId: Int): [RevisionHistory]
*
* type RevisionHistory {
* id: Int!
* action: RevisionHistoryAction
* changes: Json
* user: User
* media: Media
* character: Character
* staff: Staff
* studio: Studio
* externalLink: MediaExternalLink
* createdAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$RevisionHistory}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.revisionHistory` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
revisionHistory?: $Fields.revisionHistory.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.revisionHistory<_$Context>>
/**
* ```graphql
* reports(reporterId: Int, reportedId: Int): [Report]
*
* type Report {
* id: Int!
* reporter: User
* reported: User
* reason: String
* createdAt: Int
* cleared: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Report}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.reports` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
reports?: $Fields.reports.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.reports<_$Context>>
/**
* ```graphql
* modActions(userId: Int, modId: Int, modId_not: Int, modId_in: [Int], modId_not_in: [Int]): [ModAction]
*
* type ModAction {
* id: Int!
* user: User
* mod: User
* type: ModActionType
* objectId: Int
* objectType: String
* data: String
* createdAt: Int!
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ModAction}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.modActions` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
modActions?: $Fields.modActions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.modActions<_$Context>>
/**
* ```graphql
* userBlockSearch(search: String): [User]
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
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.userBlockSearch` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*/
userBlockSearch?: $Fields.userBlockSearch.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.userBlockSearch<_$Context>>
/**
* The pagination information
*
* ```graphql
* pageInfo: PageInfo
*
* type PageInfo {
* total: Int
* perPage: Int
* currentPage: Int
* lastPage: Int
* hasNextPage: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.pageInfo` |
* | **Nullability** | Optional |
*/
pageInfo?: $Fields.pageInfo.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.pageInfo<_$Context>>
/**
* ```graphql
* users(id: Int, name: String, isModerator: Boolean, search: String, sort: [UserSort]): [User]
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
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.users` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
users?: $Fields.users.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.users<_$Context>>
/**
* ```graphql
* media(id: Int, idMal: Int, startDate: FuzzyDateInt, endDate: FuzzyDateInt, season: MediaSeason, seasonYear: Int, type: MediaType, format: MediaFormat, status: MediaStatus, episodes: Int, duration: Int, chapters: Int, volumes: Int, isAdult: Boolean, genre: String, tag: String, minimumTagRank: Int, tagCategory: String, onList: Boolean, licensedBy: String, licensedById: Int, averageScore: Int, popularity: Int, source: MediaSource, countryOfOrigin: CountryCode, isLicensed: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], idMal_not: Int, idMal_in: [Int], idMal_not_in: [Int], startDate_greater: FuzzyDateInt, startDate_lesser: FuzzyDateInt, startDate_like: String, endDate_greater: FuzzyDateInt, endDate_lesser: FuzzyDateInt, endDate_like: String, format_in: [MediaFormat], format_not: MediaFormat, format_not_in: [MediaFormat], status_in: [MediaStatus], status_not: MediaStatus, status_not_in: [MediaStatus], episodes_greater: Int, episodes_lesser: Int, duration_greater: Int, duration_lesser: Int, chapters_greater: Int, chapters_lesser: Int, volumes_greater: Int, volumes_lesser: Int, genre_in: [String], genre_not_in: [String], tag_in: [String], tag_not_in: [String], tagCategory_in: [String], tagCategory_not_in: [String], licensedBy_in: [String], licensedById_in: [Int], averageScore_not: Int, averageScore_greater: Int, averageScore_lesser: Int, popularity_not: Int, popularity_greater: Int, popularity_lesser: Int, source_in: [MediaSource], sort: [MediaSort]): [Media]
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
* | **Type** | {@link $NamedTypes.$Media}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.media` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 69 |
*/
media?: $Fields.media.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.media<_$Context>>
/**
* ```graphql
* characters(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [CharacterSort]): [Character]
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
* | **Type** | {@link $NamedTypes.$Character}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.characters` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 7 |
*/
characters?: $Fields.characters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characters<_$Context>>
/**
* ```graphql
* staff(id: Int, isBirthday: Boolean, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StaffSort]): [Staff]
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
* | **Type** | {@link $NamedTypes.$Staff}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.staff` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 7 |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* studios(id: Int, search: String, id_not: Int, id_in: [Int], id_not_in: [Int], sort: [StudioSort]): [Studio]
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
* | **Type** | {@link $NamedTypes.$Studio}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.studios` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 6 |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
/**
* ```graphql
* mediaList(id: Int, userId: Int, userName: String, type: MediaType, status: MediaListStatus, mediaId: Int, isFollowing: Boolean, notes: String, startedAt: FuzzyDateInt, completedAt: FuzzyDateInt, compareWithAuthList: Boolean, userId_in: [Int], status_in: [MediaListStatus], status_not_in: [MediaListStatus], status_not: MediaListStatus, mediaId_in: [Int], mediaId_not_in: [Int], notes_like: String, startedAt_greater: FuzzyDateInt, startedAt_lesser: FuzzyDateInt, startedAt_like: String, completedAt_greater: FuzzyDateInt, completedAt_lesser: FuzzyDateInt, completedAt_like: String, sort: [MediaListSort]): [MediaList]
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
* | **Type** | {@link $NamedTypes.$MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.mediaList` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 25 |
*/
mediaList?: $Fields.mediaList.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaList<_$Context>>
/**
* ```graphql
* airingSchedules(id: Int, mediaId: Int, episode: Int, airingAt: Int, notYetAired: Boolean, id_not: Int, id_in: [Int], id_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], episode_not: Int, episode_in: [Int], episode_not_in: [Int], episode_greater: Int, episode_lesser: Int, airingAt_greater: Int, airingAt_lesser: Int, sort: [AiringSort]): [AiringSchedule]
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
* | **Type** | {@link $NamedTypes.$AiringSchedule}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.airingSchedules` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 19 |
*/
airingSchedules?: $Fields.airingSchedules.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.airingSchedules<_$Context>>
/**
* ```graphql
* mediaTrends(mediaId: Int, date: Int, trending: Int, averageScore: Int, popularity: Int, episode: Int, releasing: Boolean, mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], date_greater: Int, date_lesser: Int, trending_greater: Int, trending_lesser: Int, trending_not: Int, averageScore_greater: Int, averageScore_lesser: Int, averageScore_not: Int, popularity_greater: Int, popularity_lesser: Int, popularity_not: Int, episode_greater: Int, episode_lesser: Int, episode_not: Int, sort: [MediaTrendSort]): [MediaTrend]
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
* | **Type** | {@link $NamedTypes.$MediaTrend}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.mediaTrends` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 25 |
*/
mediaTrends?: $Fields.mediaTrends.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mediaTrends<_$Context>>
/**
* ```graphql
* notifications(type: NotificationType, resetNotificationCount: Boolean, type_in: [NotificationType]): [NotificationUnion]
*
* union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification | MediaSubmissionUpdateNotification | StaffSubmissionUpdateNotification | CharacterSubmissionUpdateNotification
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$NotificationUnion}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.notifications` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 3 |
*/
notifications?: $Fields.notifications.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.notifications<_$Context>>
/**
* ```graphql
* followers(userId: Int!, sort: [UserSort]): [User]
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
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.followers` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
followers?: $Fields.followers<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.followers<_$Context>>
/**
* ```graphql
* following(userId: Int!, sort: [UserSort]): [User]
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
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.following` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
following?: $Fields.following<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.following<_$Context>>
/**
* ```graphql
* activities(id: Int, userId: Int, messengerId: Int, mediaId: Int, type: ActivityType, isFollowing: Boolean, hasReplies: Boolean, hasRepliesOrTypeText: Boolean, createdAt: Int, id_not: Int, id_in: [Int], id_not_in: [Int], userId_not: Int, userId_in: [Int], userId_not_in: [Int], messengerId_not: Int, messengerId_in: [Int], messengerId_not_in: [Int], mediaId_not: Int, mediaId_in: [Int], mediaId_not_in: [Int], type_not: ActivityType, type_in: [ActivityType], type_not_in: [ActivityType], createdAt_greater: Int, createdAt_lesser: Int, sort: [ActivitySort]): [ActivityUnion]
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityUnion}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.activities` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 27 |
*/
activities?: $Fields.activities.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activities<_$Context>>
/**
* ```graphql
* activityReplies(id: Int, activityId: Int): [ActivityReply]
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
* | **Type** | {@link $NamedTypes.$ActivityReply}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.activityReplies` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
activityReplies?: $Fields.activityReplies.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activityReplies<_$Context>>
/**
* ```graphql
* threads(id: Int, userId: Int, replyUserId: Int, subscribed: Boolean, categoryId: Int, mediaCategoryId: Int, search: String, id_in: [Int], sort: [ThreadSort]): [Thread]
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
* | **Type** | {@link $NamedTypes.$Thread}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.threads` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 9 |
*/
threads?: $Fields.threads.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.threads<_$Context>>
/**
* ```graphql
* threadComments(id: Int, threadId: Int, userId: Int, sort: [ThreadCommentSort]): [ThreadComment]
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
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.threadComments` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 4 |
*/
threadComments?: $Fields.threadComments.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.threadComments<_$Context>>
/**
* ```graphql
* reviews(id: Int, mediaId: Int, userId: Int, mediaType: MediaType, sort: [ReviewSort]): [Review]
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
* | **Type** | {@link $NamedTypes.$Review}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.reviews` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 5 |
*/
reviews?: $Fields.reviews.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.reviews<_$Context>>
/**
* ```graphql
* recommendations(id: Int, mediaId: Int, mediaRecommendationId: Int, userId: Int, rating: Int, onList: Boolean, rating_greater: Int, rating_lesser: Int, sort: [RecommendationSort]): [Recommendation]
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
* | **Type** | {@link $NamedTypes.$Recommendation}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.recommendations` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 9 |
*/
recommendations?: $Fields.recommendations.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.recommendations<_$Context>>
/**
* ```graphql
* likes(likeableId: Int, type: LikeableType): [User]
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
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$InternalPage} |
* | **Path** | `InternalPage.likes` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
likes?: $Fields.likes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.likes<_$Context>>
      
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