import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as MediaSubmission from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media submission
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 17 |
*/
export interface MediaSubmission<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the submission
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* User submitter of the submission
*
* ```graphql
* submitter: User
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.submitter` |
* | **Nullability** | Optional |
*/
submitter?: $Fields.submitter.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.submitter<_$Context>>
/**
* Data Mod assigned to handle the submission
*
* ```graphql
* assignee: User
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.assignee` |
* | **Nullability** | Optional |
*/
assignee?: $Fields.assignee.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.assignee<_$Context>>
/**
* Status of the submission
*
* ```graphql
* status: SubmissionStatus
*
* enum SubmissionStatus {
* PENDING
* REJECTED
* PARTIALLY_ACCEPTED
* ACCEPTED
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SubmissionStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.status` |
* | **Nullability** | Optional |
*/
status?: $Fields.status.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.status<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* submitterStats: Json
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.submitterStats` |
* | **Nullability** | Optional |
*/
submitterStats?: $Fields.submitterStats.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.submitterStats<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* notes: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.notes` |
* | **Nullability** | Optional |
*/
notes?: $Fields.notes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.notes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* source: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.source` |
* | **Nullability** | Optional |
*/
source?: $Fields.source.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.source<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* changes: [String]
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.changes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
changes?: $Fields.changes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.changes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Whether the submission is locked
*
* ```graphql
* locked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.locked` |
* | **Nullability** | Optional |
*/
locked?: $Fields.locked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.locked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.media` |
* | **Nullability** | Optional |
*/
media?: $Fields.media.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.media<_$Context>>
/**
* ```graphql
* submission: Media
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.submission` |
* | **Nullability** | Optional |
*/
submission?: $Fields.submission.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.submission<_$Context>>
/**
* ```graphql
* characters: [MediaSubmissionComparison]
*
* type MediaSubmissionComparison {
* submission: MediaSubmissionEdge
* character: MediaCharacter
* staff: StaffEdge
* studio: StudioEdge
* externalLink: MediaExternalLink
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.characters` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
characters?: $Fields.characters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characters<_$Context>>
/**
* ```graphql
* staff: [MediaSubmissionComparison]
*
* type MediaSubmissionComparison {
* submission: MediaSubmissionEdge
* character: MediaCharacter
* staff: StaffEdge
* studio: StudioEdge
* externalLink: MediaExternalLink
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.staff` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* studios: [MediaSubmissionComparison]
*
* type MediaSubmissionComparison {
* submission: MediaSubmissionEdge
* character: MediaCharacter
* staff: StaffEdge
* studio: StudioEdge
* externalLink: MediaExternalLink
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.studios` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
/**
* ```graphql
* relations: [MediaEdge]
*
* type MediaEdge {
* node: Media
* id: Int
* relationType(version: Int): MediaRelation
* isMainStudio: Boolean!
* characters: [Character]
* characterRole: CharacterRole
* characterName: String
* roleNotes: String
* dubGroup: String
* staffRole: String
* voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]
* voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]
* favouriteOrder: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.relations` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
relations?: $Fields.relations.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.relations<_$Context>>
/**
* ```graphql
* externalLinks: [MediaSubmissionComparison]
*
* type MediaSubmissionComparison {
* submission: MediaSubmissionEdge
* character: MediaCharacter
* staff: StaffEdge
* studio: StudioEdge
* externalLink: MediaExternalLink
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.externalLinks` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
externalLinks?: $Fields.externalLinks.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.externalLinks<_$Context>>
/**
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
* | **Parent** | {@link $NamedTypes.$MediaSubmission} |
* | **Path** | `MediaSubmission.createdAt` |
* | **Nullability** | Optional |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      
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