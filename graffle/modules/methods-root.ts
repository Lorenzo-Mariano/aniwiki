import type * as $$SelectionSets from './selection-sets/_.js'
import type * as $$Schema from './schema/_.js'
import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $$SchemaMap from './schema-driven-data-map.js'


/**
* GraphQL {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root methods.
*
* All methods return Promises. Use `.query.$batch(...)` to select multiple fields at once.
*/
export interface QueryMethods<$Context extends $$Utilities.Context> {
/**
  * Select multiple Query fields at once.
  *
  * Pass a selection set object that includes the fields you want.
  * Use this method to request multiple fields in a single request for better performance.
  */

      $batch:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutput<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutput<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
                  >
              >
            >
        >

/**
  * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
  *
  * The `__typename` field returns the name of the object type. In this case, it will always return `"Query"`.
  */

      __typename:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          () =>
            Promise<
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  { __typename: 'Query' },
                  '__typename'
                >
            >
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
*/

      Page:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Page<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Page: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Page: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Page'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Page: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Page: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Page'
                  >
              >
            >
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
*/

      Media:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Media<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Media: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Media: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Media'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Media: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Media: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Media'
                  >
              >
            >
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
*/

      MediaTrend:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.MediaTrend<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTrend: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTrend: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'MediaTrend'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTrend: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTrend: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'MediaTrend'
                  >
              >
            >
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
*/

      AiringSchedule:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.AiringSchedule<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ AiringSchedule: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ AiringSchedule: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'AiringSchedule'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ AiringSchedule: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ AiringSchedule: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'AiringSchedule'
                  >
              >
            >
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
*/

      Character:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Character<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Character: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Character: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Character'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Character: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Character: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Character'
                  >
              >
            >
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
*/

      Staff:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Staff<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Staff: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Staff: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Staff'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Staff: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Staff: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Staff'
                  >
              >
            >
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
*/

      MediaList:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.MediaList<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaList: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaList: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'MediaList'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaList: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaList: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'MediaList'
                  >
              >
            >
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
*/

      MediaListCollection:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.MediaListCollection<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaListCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaListCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'MediaListCollection'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaListCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaListCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'MediaListCollection'
                  >
              >
            >
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
*/

      GenreCollection:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet?: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.GenreCollection<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ GenreCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ GenreCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'GenreCollection'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ GenreCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ GenreCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'GenreCollection'
                  >
              >
            >
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
*/

      MediaTagCollection:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.MediaTagCollection<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTagCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTagCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'MediaTagCollection'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ MediaTagCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ MediaTagCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'MediaTagCollection'
                  >
              >
            >
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
*/

      User:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.User<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ User: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ User: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'User'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ User: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ User: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'User'
                  >
              >
            >
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
*/

      Viewer:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Viewer<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Viewer: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Viewer: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Viewer'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Viewer: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Viewer: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Viewer'
                  >
              >
            >
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
*/

      Notification:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Notification<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Notification: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Notification: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Notification'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Notification: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Notification: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Notification'
                  >
              >
            >
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
*/

      Studio:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Studio<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Studio: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Studio: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Studio'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Studio: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Studio: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Studio'
                  >
              >
            >
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
*/

      Review:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Review<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Review: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Review: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Review'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Review: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Review: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Review'
                  >
              >
            >
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
*/

      Activity:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Activity<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Activity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Activity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Activity'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Activity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Activity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Activity'
                  >
              >
            >
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
*/

      ActivityReply:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.ActivityReply<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ ActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ ActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ActivityReply'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ ActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ ActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ActivityReply'
                  >
              >
            >
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
*/

      Following:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Following<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Following: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Following: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Following'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Following: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Following: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Following'
                  >
              >
            >
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
*/

      Follower:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Follower<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Follower: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Follower: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Follower'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Follower: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Follower: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Follower'
                  >
              >
            >
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
*/

      Thread:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Thread<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Thread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Thread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Thread'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Thread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Thread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Thread'
                  >
              >
            >
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
*/

      ThreadComment:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.ThreadComment<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ ThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ ThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ThreadComment'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ ThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ ThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ThreadComment'
                  >
              >
            >
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
*/

      Recommendation:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Recommendation<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Recommendation: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Recommendation: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Recommendation'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Recommendation: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Recommendation: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Recommendation'
                  >
              >
            >
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
*/

      Like:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Like<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Like: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Like: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Like'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Like: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Like: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Like'
                  >
              >
            >
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
*/

      Markdown:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.Markdown<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ Markdown: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ Markdown: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'Markdown'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ Markdown: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ Markdown: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'Markdown'
                  >
              >
            >
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
*/

      AniChartUser:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.AniChartUser<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ AniChartUser: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ AniChartUser: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'AniChartUser'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ AniChartUser: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ AniChartUser: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'AniChartUser'
                  >
              >
            >
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
*/

      SiteStatistics:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.SiteStatistics<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ SiteStatistics: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ SiteStatistics: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SiteStatistics'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ SiteStatistics: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ SiteStatistics: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SiteStatistics'
                  >
              >
            >
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
*/

      ExternalLinkSourceCollection:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query.ExternalLinkSourceCollection<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromQuery<{ ExternalLinkSourceCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationQuery<{ ExternalLinkSourceCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ExternalLinkSourceCollection'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromQuery<{ ExternalLinkSourceCollection: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationQuery<{ ExternalLinkSourceCollection: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ExternalLinkSourceCollection'
                  >
              >
            >
        >

    }


/**
* GraphQL {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root methods.
*
* All methods return Promises. Use `.mutation.$batch(...)` to select multiple fields at once.
*/
export interface MutationMethods<$Context extends $$Utilities.Context> {
/**
  * Select multiple Mutation fields at once.
  *
  * Pass a selection set object that includes the fields you want.
  * Use this method to request multiple fields in a single request for better performance.
  */

      $batch:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<$$Utilities.AssertExtendsObject<$SelectionSet>, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutput<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<$$Utilities.AssertExtendsObject<$SelectionSet>, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutput<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<$$Utilities.AssertExtendsObject<$SelectionSet>, $$Schema.Schema<$Context['scalars']>>
                  >
              >
            >
        >

/**
  * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
  *
  * The `__typename` field returns the name of the object type. In this case, it will always return `"Mutation"`.
  */

      __typename:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          () =>
            Promise<
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  { __typename: 'Mutation' },
                  '__typename'
                >
            >
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
*/

      UpdateUser:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.UpdateUser<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateUser: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateUser: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'UpdateUser'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateUser: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateUser: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'UpdateUser'
                  >
              >
            >
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
*/

      SaveMediaListEntry:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveMediaListEntry<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMediaListEntry: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMediaListEntry: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveMediaListEntry'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMediaListEntry: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMediaListEntry: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveMediaListEntry'
                  >
              >
            >
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
*/

      UpdateMediaListEntries:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.UpdateMediaListEntries<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateMediaListEntries: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateMediaListEntries: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'UpdateMediaListEntries'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateMediaListEntries: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateMediaListEntries: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'UpdateMediaListEntries'
                  >
              >
            >
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
*/

      DeleteMediaListEntry:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteMediaListEntry<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteMediaListEntry: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteMediaListEntry: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteMediaListEntry'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteMediaListEntry: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteMediaListEntry: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteMediaListEntry'
                  >
              >
            >
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
*/

      DeleteCustomList:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteCustomList<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteCustomList: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteCustomList: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteCustomList'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteCustomList: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteCustomList: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteCustomList'
                  >
              >
            >
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
*/

      SaveTextActivity:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveTextActivity<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveTextActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveTextActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveTextActivity'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveTextActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveTextActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveTextActivity'
                  >
              >
            >
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
*/

      SaveMessageActivity:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveMessageActivity<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMessageActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMessageActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveMessageActivity'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveMessageActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveMessageActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveMessageActivity'
                  >
              >
            >
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
*/

      SaveListActivity:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveListActivity<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveListActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveListActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveListActivity'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveListActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveListActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveListActivity'
                  >
              >
            >
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
*/

      DeleteActivity:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteActivity<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteActivity'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivity: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivity: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteActivity'
                  >
              >
            >
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
*/

      ToggleActivityPin:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleActivityPin<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivityPin: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivityPin: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleActivityPin'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivityPin: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivityPin: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleActivityPin'
                  >
              >
            >
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
*/

      ToggleActivitySubscription:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleActivitySubscription<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivitySubscription: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivitySubscription: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleActivitySubscription'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleActivitySubscription: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleActivitySubscription: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleActivitySubscription'
                  >
              >
            >
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
*/

      SaveActivityReply:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveActivityReply<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveActivityReply'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveActivityReply'
                  >
              >
            >
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
*/

      DeleteActivityReply:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteActivityReply<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteActivityReply'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteActivityReply: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteActivityReply: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteActivityReply'
                  >
              >
            >
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
*/

      ToggleLike:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleLike<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLike: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLike: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleLike'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLike: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLike: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleLike'
                  >
              >
            >
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
*/

      ToggleLikeV2:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleLikeV2<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLikeV2: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLikeV2: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleLikeV2'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleLikeV2: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleLikeV2: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleLikeV2'
                  >
              >
            >
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
*/

      ToggleFollow:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleFollow<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFollow: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFollow: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleFollow'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFollow: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFollow: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleFollow'
                  >
              >
            >
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
*/

      ToggleFavourite:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleFavourite<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFavourite: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFavourite: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleFavourite'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleFavourite: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleFavourite: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleFavourite'
                  >
              >
            >
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
*/

      UpdateFavouriteOrder:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.UpdateFavouriteOrder<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateFavouriteOrder: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateFavouriteOrder: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'UpdateFavouriteOrder'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateFavouriteOrder: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateFavouriteOrder: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'UpdateFavouriteOrder'
                  >
              >
            >
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
*/

      SaveReview:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveReview<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveReview'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveReview'
                  >
              >
            >
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
*/

      DeleteReview:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteReview<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteReview'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteReview'
                  >
              >
            >
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
*/

      RateReview:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.RateReview<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ RateReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ RateReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'RateReview'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ RateReview: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ RateReview: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'RateReview'
                  >
              >
            >
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
*/

      SaveRecommendation:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveRecommendation<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveRecommendation: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveRecommendation: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveRecommendation'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveRecommendation: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveRecommendation: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveRecommendation'
                  >
              >
            >
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
*/

      SaveThread:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveThread<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveThread'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveThread'
                  >
              >
            >
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
*/

      DeleteThread:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteThread<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteThread'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThread: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThread: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteThread'
                  >
              >
            >
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
*/

      ToggleThreadSubscription:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.ToggleThreadSubscription<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleThreadSubscription: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleThreadSubscription: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'ToggleThreadSubscription'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ ToggleThreadSubscription: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ ToggleThreadSubscription: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'ToggleThreadSubscription'
                  >
              >
            >
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
*/

      SaveThreadComment:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.SaveThreadComment<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'SaveThreadComment'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ SaveThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ SaveThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'SaveThreadComment'
                  >
              >
            >
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
*/

      DeleteThreadComment:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.DeleteThreadComment<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'DeleteThreadComment'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ DeleteThreadComment: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ DeleteThreadComment: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'DeleteThreadComment'
                  >
              >
            >
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
*/

      UpdateAniChartSettings:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet?: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.UpdateAniChartSettings<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartSettings: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartSettings: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'UpdateAniChartSettings'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartSettings: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartSettings: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'UpdateAniChartSettings'
                  >
              >
            >
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
*/

      UpdateAniChartHighlights:
        $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet?: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation.UpdateAniChartHighlights<{ scalars: $Context['scalars'] }>>) =>
            GraphqlKit.Document.Object.Var.MethodReturn<
              GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartHighlights: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
              & (null | {})
              & $$Utilities.HandleOutputDocumentBuilderRootField<
                  $Context,
                  GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartHighlights: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                  'UpdateAniChartHighlights'
                >,
              $$Utilities.DocumentRunnerDeferred<
                GraphqlKit.Document.Object.Var.InferFromMutation<{ UpdateAniChartHighlights: $SelectionSet}, $$SchemaMap.SchemaDrivenDataMap>,
                & (null | {})
                & $$Utilities.HandleOutputDocumentBuilderRootField<
                    $Context,
                    GraphqlKit.Document.Object.InferResult.OperationMutation<{ UpdateAniChartHighlights: $SelectionSet}, $$Schema.Schema<$Context['scalars']>>,
                    'UpdateAniChartHighlights'
                  >
              >
            >
        >

    }


export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
/**
  * Access to {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root field methods.
  *
  * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
  * Use `.$batch(...)` to select multiple query fields in a single request.
  *
  * @example Single field
  * ```ts
  * const user = await graffle.query.user({ id: true, name: true })
  * ```
  * @example Multiple fields with $batch
  * ```ts
  * const data = await graffle.query.$batch({
  * user: { id: true, name: true },
  * posts: { title: true, content: true }
  * })
  * ```
  */
query: QueryMethods<$Context>
/**
  * Access to {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root field methods.
  *
  * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
  * Use `.$batch(...)` to select multiple mutation fields in a single request.
  *
  * @example Single field
  * ```ts
  * const result = await graffle.mutation.createUser({
  * id: true,
  * name: true
  * })
  * ```
  * @example Multiple fields with $batch
  * ```ts
  * const data = await graffle.mutation.$batch({
  * createUser: { id: true, name: true },
  * createPost: { id: true, title: true }
  * })
  * ```
  */
mutation: MutationMethods<$Context>
}


      export interface BuilderMethodsRootFn extends $$Utilities.Kind.Kind {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['parameters']>
      }
