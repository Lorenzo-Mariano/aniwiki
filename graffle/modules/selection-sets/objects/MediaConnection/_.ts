import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as MediaConnection from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface MediaConnection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* edges: [MediaEdge]
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
* | **Parent** | {@link $NamedTypes.$MediaConnection} |
* | **Path** | `MediaConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
edges?: $Fields.edges.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.edges<_$Context>>
/**
* ```graphql
* nodes: [Media]
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
* | **Parent** | {@link $NamedTypes.$MediaConnection} |
* | **Path** | `MediaConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
nodes?: $Fields.nodes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.nodes<_$Context>>
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
* | **Parent** | {@link $NamedTypes.$MediaConnection} |
* | **Path** | `MediaConnection.pageInfo` |
* | **Nullability** | Optional |
*/
pageInfo?: $Fields.pageInfo.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.pageInfo<_$Context>>
      
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