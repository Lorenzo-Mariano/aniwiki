import { createStaticRootType } from 'graffle/extensions/document-builder'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as SelectionSets from './selection-sets/_.js'
import type * as $$Scalar from './scalar.js'
import type * as SchemaMap from './schema-driven-data-map.js'

import type * as $$Utilities from 'graffle/utilities-for-generated'
import type * as $$Schema from './schema/_.js'

/**
* Context for static document type inference.
*
* Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
*/
interface StaticDocumentContext {
typeHookRequestResultDataTypes: never
scalars: $$Scalar.$Registry
}

/**
* Static query builder for compile-time GraphQL document generation.
*
* @remarks
* Each field method generates a fully typed GraphQL  document string with:
* - Type-safe selection sets matching your schema
* - Automatic variable inference from `$` usage
* - Compile-time validation of field selections
* - Zero runtime overhead - documents are generated at build time
*
* @example Basic query
* ```ts
* const getUserDoc = query.user({
* id: true,
* name: true,
* email: true
* })
* // Generates: query { user { id name email } }
* ```
*
* @example With variables
* ```ts
* import { Var } from 'graffle'
*
* const getUserByIdDoc = query.user({
* $: { id: $ },
* name: true,
* posts: { title: true }
* })
* // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
* // Variables type: { id: string }
* ```
*
* @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
*/

        export interface QueryBuilder {
          $batch: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<$SelectionSet, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Page} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Page` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = query.Page({
* // $: { ...variables }
* pageInfo: true,
* users: true,
* media: true,
* // ...
* })
* ```
*/
          Page: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Page']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Page: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Page: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Media` |
* | **Nullability** | Optional |
* | **Arguments** | 69 |
*
* @example
* ```ts
* const doc = query.Media({
* // $: { ...variables }
* id: true,
* idMal: true,
* title: true,
* // ...
* })
* ```
*/
          Media: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Media']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Media: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Media: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.MediaTrend} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaTrend` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*
* @example
* ```ts
* const doc = query.MediaTrend({
* // $: { ...variables }
* mediaId: true,
* date: true,
* trending: true,
* // ...
* })
* ```
*/
          MediaTrend: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['MediaTrend']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTrend: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTrend: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.AiringSchedule} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.AiringSchedule` |
* | **Nullability** | Optional |
* | **Arguments** | 19 |
*
* @example
* ```ts
* const doc = query.AiringSchedule({
* // $: { ...variables }
* id: true,
* airingAt: true,
* timeUntilAiring: true,
* // ...
* })
* ```
*/
          AiringSchedule: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['AiringSchedule']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ AiringSchedule: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ AiringSchedule: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Character` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*
* @example
* ```ts
* const doc = query.Character({
* // $: { ...variables }
* id: true,
* name: true,
* image: true,
* // ...
* })
* ```
*/
          Character: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Character']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Character: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Character: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Staff` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*
* @example
* ```ts
* const doc = query.Staff({
* // $: { ...variables }
* id: true,
* name: true,
* language: true,
* // ...
* })
* ```
*/
          Staff: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Staff']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Staff: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Staff: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaList` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*
* @example
* ```ts
* const doc = query.MediaList({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          MediaList: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['MediaList']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaList: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaList: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.MediaListCollection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaListCollection` |
* | **Nullability** | Optional |
* | **Arguments** | 21 |
*
* @example
* ```ts
* const doc = query.MediaListCollection({
* // $: { ...variables }
* lists: true,
* user: true,
* hasNextChunk: true,
* // ...
* })
* ```
*/
          MediaListCollection: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['MediaListCollection']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaListCollection: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaListCollection: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.GenreCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
*
* @example
* ```ts
* const doc = query.GenreCollection()
* ```
*/
          GenreCollection: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['GenreCollection']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ GenreCollection: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ GenreCollection: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.MediaTag}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaTagCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = query.MediaTagCollection({
* // $: { ...variables }
* id: true,
* name: true,
* description: true,
* // ...
* })
* ```
*/
          MediaTagCollection: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['MediaTagCollection']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTagCollection: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTagCollection: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.User` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*
* @example
* ```ts
* const doc = query.User({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          User: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['User']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ User: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ User: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Viewer` |
* | **Nullability** | Optional |
*
* @example
* ```ts
* const doc = query.Viewer({
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          Viewer: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Viewer']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Viewer: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Viewer: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.NotificationUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Notification` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*
* @example
* ```ts
* const doc = query.Notification({
* __typename: true,
* ___on_SomeType: {
* // ... fields for this type
* }
* })
* ```
*/
          Notification: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Notification']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Notification: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Notification: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Studio` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*
* @example
* ```ts
* const doc = query.Studio({
* // $: { ...variables }
* id: true,
* name: true,
* isAnimationStudio: true,
* // ...
* })
* ```
*/
          Studio: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Studio']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Studio: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Studio: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Review` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*
* @example
* ```ts
* const doc = query.Review({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          Review: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Review']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Review: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Review: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Activity` |
* | **Nullability** | Optional |
* | **Arguments** | 27 |
*
* @example
* ```ts
* const doc = query.Activity({
* __typename: true,
* ___on_SomeType: {
* // ... fields for this type
* }
* })
* ```
*/
          Activity: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Activity']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Activity: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Activity: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = query.ActivityReply({
* // $: { ...variables }
* id: true,
* userId: true,
* activityId: true,
* // ...
* })
* ```
*/
          ActivityReply: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ActivityReply']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ ActivityReply: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ ActivityReply: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Following` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = query.Following({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          Following: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Following']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Following: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Following: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Follower` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = query.Follower({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          Follower: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Follower']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Follower: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Follower: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Thread` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*
* @example
* ```ts
* const doc = query.Thread({
* // $: { ...variables }
* id: true,
* title: true,
* body: true,
* // ...
* })
* ```
*/
          Thread: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Thread']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Thread: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Thread: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.ThreadComment}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ThreadComment` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 4 |
*
* @example
* ```ts
* const doc = query.ThreadComment({
* // $: { ...variables }
* id: true,
* userId: true,
* threadId: true,
* // ...
* })
* ```
*/
          ThreadComment: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ThreadComment']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ ThreadComment: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ ThreadComment: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Recommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*
* @example
* ```ts
* const doc = query.Recommendation({
* // $: { ...variables }
* id: true,
* rating: true,
* userRating: true,
* // ...
* })
* ```
*/
          Recommendation: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Recommendation']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Recommendation: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Recommendation: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Like` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = query.Like({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          Like: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Like']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Like: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Like: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.ParsedMarkdown} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Markdown` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = query.Markdown({
* // $: { ...variables }
* html: true
* })
* ```
*/
          Markdown: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['Markdown']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ Markdown: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ Markdown: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.AniChartUser} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.AniChartUser` |
* | **Nullability** | Optional |
*
* @example
* ```ts
* const doc = query.AniChartUser({
* user: true,
* settings: true,
* highlights: true
* })
* ```
*/
          AniChartUser: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['AniChartUser']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ AniChartUser: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ AniChartUser: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.SiteStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.SiteStatistics` |
* | **Nullability** | Optional |
*
* @example
* ```ts
* const doc = query.SiteStatistics({
* users: true,
* anime: true,
* manga: true,
* // ...
* })
* ```
*/
          SiteStatistics: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SiteStatistics']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ SiteStatistics: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ SiteStatistics: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

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
* | **Type** | {@link $Schema.MediaExternalLink}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ExternalLinkSourceCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 3 |
*
* @example
* ```ts
* const doc = query.ExternalLinkSourceCollection({
* // $: { ...variables }
* id: true,
* url: true,
* site: true,
* // ...
* })
* ```
*/
          ExternalLinkSourceCollection: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ExternalLinkSourceCollection']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ ExternalLinkSourceCollection: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ ExternalLinkSourceCollection: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >
        }

/**
* Static query builder for compile-time GraphQL document generation.
*
* @remarks
* Each field method generates a fully typed GraphQL  document string with:
* - Type-safe selection sets matching your schema
* - Automatic variable inference from `$` usage
* - Compile-time validation of field selections
* - Zero runtime overhead - documents are generated at build time
*
* @example Basic query
* ```ts
* const getUserDoc = query.user({
* id: true,
* name: true,
* email: true
* })
* // Generates: query { user { id name email } }
* ```
*
* @example With variables
* ```ts
* import { Var } from 'graffle'
*
* const getUserByIdDoc = query.user({
* $: { id: $ },
* name: true,
* posts: { title: true }
* })
* // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
* // Variables type: { id: string }
* ```
*
* @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
*/
export const query: QueryBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.QUERY, { sddm }) as any


/**
* Static mutation builder for compile-time GraphQL document generation.
*
* @remarks
* Each field method generates a fully typed GraphQL mutation document  with:
* - Type-safe selection sets and input types
* - Automatic variable inference from `$` usage
* - Compile-time validation of mutations
* - Zero runtime overhead - documents are generated at build time
*
* @example
* ```ts
* import { Var } from 'graffle'
*
* const createUserDoc = mutation.createUser({
* $: { input: $ },
* id: true,
* name: true
* })
* // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
* ```
*
* @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
*/

        export interface MutationBuilder {
          $batch: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<$SelectionSet, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* ```graphql
* UpdateUser(about: String, titleLanguage: UserTitleLanguage, displayAdultContent: Boolean, airingNotifications: Boolean, scoreFormat: ScoreFormat, rowOrder: String, profileColor: String, donatorBadge: String, notificationOptions: [NotificationOptionInput], timezone: String, activityMergeTime: Int, animeListOptions: MediaListOptionsInput, mangaListOptions: MediaListOptionsInput, staffNameLanguage: UserStaffNameLanguage, restrictMessagesToFollowing: Boolean, disabledListActivity: [ListActivityOptionInput]): User
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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateUser` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*
* @example
* ```ts
* const doc = mutation.UpdateUser({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          UpdateUser: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['UpdateUser']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateUser: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateUser: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update a media list entry
*
* ```graphql
* SaveMediaListEntry(id: Int, mediaId: Int, status: MediaListStatus, score: Float, scoreRaw: Int, progress: Int, progressVolumes: Int, repeat: Int, priority: Int, private: Boolean, notes: String, hiddenFromStatusLists: Boolean, customLists: [String], advancedScores: [Float], startedAt: FuzzyDateInput, completedAt: FuzzyDateInput): MediaList
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
* | **Type** | {@link $Schema.MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*
* @example
* ```ts
* const doc = mutation.SaveMediaListEntry({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          SaveMediaListEntry: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveMediaListEntry']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMediaListEntry: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMediaListEntry: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Update multiple media list entries to the same values
*
* ```graphql
* UpdateMediaListEntries(status: MediaListStatus, score: Float, scoreRaw: Int, progress: Int, progressVolumes: Int, repeat: Int, priority: Int, private: Boolean, notes: String, hiddenFromStatusLists: Boolean, advancedScores: [Float], startedAt: FuzzyDateInput, completedAt: FuzzyDateInput, ids: [Int]): [MediaList]
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
* | **Type** | {@link $Schema.MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateMediaListEntries` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 14 |
*
* @example
* ```ts
* const doc = mutation.UpdateMediaListEntries({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          UpdateMediaListEntries: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['UpdateMediaListEntries']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateMediaListEntries: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateMediaListEntries: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete a media list entry
*
* ```graphql
* DeleteMediaListEntry(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteMediaListEntry({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteMediaListEntry: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteMediaListEntry']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteMediaListEntry: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteMediaListEntry: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete a custom list and remove the list entries from it
*
* ```graphql
* DeleteCustomList(customList: String, type: MediaType): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteCustomList` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.DeleteCustomList({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteCustomList: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteCustomList']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteCustomList: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteCustomList: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update text activity for the currently authenticated user
*
* ```graphql
* SaveTextActivity(id: Int, text: String, locked: Boolean): TextActivity
*
* type TextActivity {
* id: Int!
* userId: Int
* type: ActivityType
* replyCount: Int!
* text(asHtml: Boolean): String
* siteUrl: String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* createdAt: Int!
* user: User
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.TextActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveTextActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*
* @example
* ```ts
* const doc = mutation.SaveTextActivity({
* // $: { ...variables }
* id: true,
* userId: true,
* type: true,
* // ...
* })
* ```
*/
          SaveTextActivity: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveTextActivity']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveTextActivity: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveTextActivity: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update message activity for the currently authenticated user
*
* ```graphql
* SaveMessageActivity(id: Int, message: String, recipientId: Int, private: Boolean, locked: Boolean, asMod: Boolean): MessageActivity
*
* type MessageActivity {
* id: Int!
* recipientId: Int
* messengerId: Int
* type: ActivityType
* replyCount: Int!
* message(asHtml: Boolean): String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* isPrivate: Boolean
* siteUrl: String
* createdAt: Int!
* recipient: User
* messenger: User
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MessageActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveMessageActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*
* @example
* ```ts
* const doc = mutation.SaveMessageActivity({
* // $: { ...variables }
* id: true,
* recipientId: true,
* messengerId: true,
* // ...
* })
* ```
*/
          SaveMessageActivity: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveMessageActivity']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMessageActivity: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMessageActivity: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Update list activity (Mod Only)
*
* ```graphql
* SaveListActivity(id: Int, locked: Boolean): ListActivity
*
* type ListActivity {
* id: Int!
* userId: Int
* type: ActivityType
* replyCount: Int!
* status: String
* progress: String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* siteUrl: String
* createdAt: Int!
* user: User
* media: Media
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveListActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.SaveListActivity({
* // $: { ...variables }
* id: true,
* userId: true,
* type: true,
* // ...
* })
* ```
*/
          SaveListActivity: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveListActivity']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveListActivity: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveListActivity: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete an activity item of the authenticated users
*
* ```graphql
* DeleteActivity(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteActivity({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteActivity: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteActivity']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivity: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivity: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Toggle activity to be pinned to the top of the user's activity feed
*
* ```graphql
* ToggleActivityPin(id: Int, pinned: Boolean): ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleActivityPin` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.ToggleActivityPin({
* __typename: true,
* ___on_SomeType: {
* // ... fields for this type
* }
* })
* ```
*/
          ToggleActivityPin: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleActivityPin']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivityPin: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivityPin: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Toggle the subscription of an activity item
*
* ```graphql
* ToggleActivitySubscription(activityId: Int, subscribe: Boolean): ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleActivitySubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.ToggleActivitySubscription({
* __typename: true,
* ___on_SomeType: {
* // ... fields for this type
* }
* })
* ```
*/
          ToggleActivitySubscription: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleActivitySubscription']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivitySubscription: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivitySubscription: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update an activity reply
*
* ```graphql
* SaveActivityReply(id: Int, activityId: Int, text: String, asMod: Boolean): ActivityReply
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
* | **Type** | {@link $Schema.ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*
* @example
* ```ts
* const doc = mutation.SaveActivityReply({
* // $: { ...variables }
* id: true,
* userId: true,
* activityId: true,
* // ...
* })
* ```
*/
          SaveActivityReply: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveActivityReply']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveActivityReply: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveActivityReply: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete an activity reply of the authenticated users
*
* ```graphql
* DeleteActivityReply(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteActivityReply({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteActivityReply: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteActivityReply']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivityReply: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivityReply: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Add or remove a like from a likeable type.
* Returns all the users who liked the same model
*
* ```graphql
* ToggleLike(id: Int, type: LikeableType): [User]
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
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleLike` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.ToggleLike({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          ToggleLike: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleLike']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLike: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLike: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Add or remove a like from a likeable type.
*
* ```graphql
* ToggleLikeV2(id: Int, type: LikeableType): LikeableUnion
*
* union LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.LikeableUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleLikeV2` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.ToggleLikeV2({
* __typename: true,
* ___on_SomeType: {
* // ... fields for this type
* }
* })
* ```
*/
          ToggleLikeV2: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleLikeV2']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLikeV2: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLikeV2: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Toggle the un/following of a user
*
* ```graphql
* ToggleFollow(userId: Int): User
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
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleFollow` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.ToggleFollow({
* // $: { ...variables }
* id: true,
* name: true,
* about: true,
* // ...
* })
* ```
*/
          ToggleFollow: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleFollow']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFollow: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFollow: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Favourite or unfavourite an anime, manga, character, staff member, or studio
*
* ```graphql
* ToggleFavourite(animeId: Int, mangaId: Int, characterId: Int, staffId: Int, studioId: Int): Favourites
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
* | **Type** | {@link $Schema.Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleFavourite` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*
* @example
* ```ts
* const doc = mutation.ToggleFavourite({
* // $: { ...variables }
* anime: true,
* manga: true,
* characters: true,
* // ...
* })
* ```
*/
          ToggleFavourite: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleFavourite']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFavourite: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFavourite: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Update the order favourites are displayed in
*
* ```graphql
* UpdateFavouriteOrder(animeIds: [Int], mangaIds: [Int], characterIds: [Int], staffIds: [Int], studioIds: [Int], animeOrder: [Int], mangaOrder: [Int], characterOrder: [Int], staffOrder: [Int], studioOrder: [Int]): Favourites
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
* | **Type** | {@link $Schema.Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateFavouriteOrder` |
* | **Nullability** | Optional |
* | **Arguments** | 10 |
*
* @example
* ```ts
* const doc = mutation.UpdateFavouriteOrder({
* // $: { ...variables }
* anime: true,
* manga: true,
* characters: true,
* // ...
* })
* ```
*/
          UpdateFavouriteOrder: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['UpdateFavouriteOrder']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateFavouriteOrder: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateFavouriteOrder: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update a review
*
* ```graphql
* SaveReview(id: Int, mediaId: Int, body: String, summary: String, score: Int, private: Boolean): Review
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
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveReview` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*
* @example
* ```ts
* const doc = mutation.SaveReview({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          SaveReview: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveReview']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveReview: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveReview: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete a review
*
* ```graphql
* DeleteReview(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteReview` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteReview({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteReview: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteReview']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteReview: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteReview: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Rate a review
*
* ```graphql
* RateReview(reviewId: Int, rating: ReviewRating): Review
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
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.RateReview` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.RateReview({
* // $: { ...variables }
* id: true,
* userId: true,
* mediaId: true,
* // ...
* })
* ```
*/
          RateReview: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['RateReview']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ RateReview: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ RateReview: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Recommendation a media
*
* ```graphql
* SaveRecommendation(mediaId: Int, mediaRecommendationId: Int, rating: RecommendationRating): Recommendation
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
* | **Type** | {@link $Schema.Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveRecommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*
* @example
* ```ts
* const doc = mutation.SaveRecommendation({
* // $: { ...variables }
* id: true,
* rating: true,
* userRating: true,
* // ...
* })
* ```
*/
          SaveRecommendation: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveRecommendation']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveRecommendation: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveRecommendation: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update a forum thread
*
* ```graphql
* SaveThread(id: Int, title: String, body: String, categories: [Int], mediaCategories: [Int], sticky: Boolean, locked: Boolean): Thread
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
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveThread` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*
* @example
* ```ts
* const doc = mutation.SaveThread({
* // $: { ...variables }
* id: true,
* title: true,
* body: true,
* // ...
* })
* ```
*/
          SaveThread: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveThread']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThread: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThread: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete a thread
*
* ```graphql
* DeleteThread(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteThread` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteThread({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteThread: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteThread']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThread: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThread: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Toggle the subscription of a forum thread
*
* ```graphql
* ToggleThreadSubscription(threadId: Int, subscribe: Boolean): Thread
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
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleThreadSubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*
* @example
* ```ts
* const doc = mutation.ToggleThreadSubscription({
* // $: { ...variables }
* id: true,
* title: true,
* body: true,
* // ...
* })
* ```
*/
          ToggleThreadSubscription: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['ToggleThreadSubscription']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleThreadSubscription: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleThreadSubscription: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Create or update a thread comment
*
* ```graphql
* SaveThreadComment(id: Int, threadId: Int, parentCommentId: Int, comment: String, locked: Boolean): ThreadComment
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
* | **Type** | {@link $Schema.ThreadComment} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*
* @example
* ```ts
* const doc = mutation.SaveThreadComment({
* // $: { ...variables }
* id: true,
* userId: true,
* threadId: true,
* // ...
* })
* ```
*/
          SaveThreadComment: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['SaveThreadComment']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThreadComment: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThreadComment: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* Delete a thread comment
*
* ```graphql
* DeleteThreadComment(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.DeleteThreadComment({
* // $: { ...variables }
* deleted: true
* })
* ```
*/
          DeleteThreadComment: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['DeleteThreadComment']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThreadComment: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThreadComment: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* ```graphql
* UpdateAniChartSettings(titleLanguage: String, outgoingLinkProvider: String, theme: String, sort: String): Json
*
* scalar Json
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateAniChartSettings` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*
* @example
* ```ts
* const doc = mutation.UpdateAniChartSettings()
* ```
*/
          UpdateAniChartSettings: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['UpdateAniChartSettings']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartSettings: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartSettings: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          /**
* ```graphql
* UpdateAniChartHighlights(highlights: [AniChartHighlightInput]): Json
*
* scalar Json
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateAniChartHighlights` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*
* @example
* ```ts
* const doc = mutation.UpdateAniChartHighlights()
* ```
*/
          UpdateAniChartHighlights: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['UpdateAniChartHighlights']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartHighlights: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartHighlights: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >
        }

/**
* Static mutation builder for compile-time GraphQL document generation.
*
* @remarks
* Each field method generates a fully typed GraphQL mutation document  with:
* - Type-safe selection sets and input types
* - Automatic variable inference from `$` usage
* - Compile-time validation of mutations
* - Zero runtime overhead - documents are generated at build time
*
* @example
* ```ts
* import { Var } from 'graffle'
*
* const createUserDoc = mutation.createUser({
* $: { input: $ },
* id: true,
* name: true
* })
* // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
* ```
*
* @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
*/
export const mutation: MutationBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.MUTATION, { sddm }) as any
