import * as $$Data from './data.js'
import * as $$Schema from './schema/_.js'
import * as $$SelectionSets from './selection-sets/_.js'
import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                              Runtime
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


      import { createSelect } from 'graffle/client'

      /**
       * Runtime utilities for native GraphQL document selection.
       *
       * Used with the `.select()` method to build type-safe native GraphQL documents.
       *
       * @example
       * ```ts
       * import { Select } from './graffle/select.js'
       *
       * const document = Select.Query({ pokemon: { name: true } })
       * ```
       */
      export const Select = createSelect($$Data.Name)



    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                             Buildtime
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


      /**
       * Type utilities for inferring result types from selection sets.
       *
       * Given a selection set, these types compute the exact TypeScript type
       * of the result data returned from a GraphQL operation.
       *
       * # Usage
       *
       * Each type corresponds to a GraphQL schema type and takes a selection set
       * generic parameter, returning the inferred result type.
       *
       * @example
       * ```ts
       * import type { Select } from './graffle/select.js'
       *
       * type Result = Select.Query<{ pokemon: { name: true } }>
       * // Result: { pokemon: { name: string } }
       * ```
       */
      export namespace Select {


    //                                                Root
    // --------------------------------------------------------------------------------------------------
    //

/**
* Infer result type for Query operations.
*/
export type Query<$SelectionSet extends $$SelectionSets.Query> = GraphqlKit.Document.Object.InferResult.Operation<$SelectionSet, $$Schema.Schema, $$Utilities.GraphqlKit.Schema.OperationType.QUERY >
/**
* Infer result type for Mutation operations.
*/
export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> = GraphqlKit.Document.Object.InferResult.Operation<$SelectionSet, $$Schema.Schema, $$Utilities.GraphqlKit.Schema.OperationType.MUTATION>


    //                                            OutputObject
    // --------------------------------------------------------------------------------------------------
    //

/**
* Notification for when a activity is liked
*
* Infer result type for ActivityLikeNotification selection sets.
*/
export type ActivityLikeNotification<$SelectionSet extends $$SelectionSets.ActivityLikeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityLikeNotification']>
/**
* Notification for when authenticated user is @ mentioned in activity or reply
*
* Infer result type for ActivityMentionNotification selection sets.
*/
export type ActivityMentionNotification<$SelectionSet extends $$SelectionSets.ActivityMentionNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityMentionNotification']>
/**
* Notification for when a user is send an activity message
*
* Infer result type for ActivityMessageNotification selection sets.
*/
export type ActivityMessageNotification<$SelectionSet extends $$SelectionSets.ActivityMessageNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityMessageNotification']>
/**
* Replay to an activity item
*
* Infer result type for ActivityReply selection sets.
*/
export type ActivityReply<$SelectionSet extends $$SelectionSets.ActivityReply> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityReply']>
/**
* Notification for when a activity reply is liked
*
* Infer result type for ActivityReplyLikeNotification selection sets.
*/
export type ActivityReplyLikeNotification<$SelectionSet extends $$SelectionSets.ActivityReplyLikeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityReplyLikeNotification']>
/**
* Notification for when a user replies to the authenticated users activity
*
* Infer result type for ActivityReplyNotification selection sets.
*/
export type ActivityReplyNotification<$SelectionSet extends $$SelectionSets.ActivityReplyNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityReplyNotification']>
/**
* Notification for when a user replies to activity the authenticated user has replied to
*
* Infer result type for ActivityReplySubscribedNotification selection sets.
*/
export type ActivityReplySubscribedNotification<$SelectionSet extends $$SelectionSets.ActivityReplySubscribedNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityReplySubscribedNotification']>
/**
* Notification for when an episode of anime airs
*
* Infer result type for AiringNotification selection sets.
*/
export type AiringNotification<$SelectionSet extends $$SelectionSets.AiringNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AiringNotification']>
/**
* Score & Watcher stats for airing anime by episode and mid-week
*
* Infer result type for AiringProgression selection sets.
*/
export type AiringProgression<$SelectionSet extends $$SelectionSets.AiringProgression> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AiringProgression']>
/**
* Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
*
* Infer result type for AiringSchedule selection sets.
*/
export type AiringSchedule<$SelectionSet extends $$SelectionSets.AiringSchedule> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AiringSchedule']>
/**
* Infer result type for AiringScheduleConnection selection sets.
*/
export type AiringScheduleConnection<$SelectionSet extends $$SelectionSets.AiringScheduleConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AiringScheduleConnection']>
/**
* AiringSchedule connection edge
*
* Infer result type for AiringScheduleEdge selection sets.
*/
export type AiringScheduleEdge<$SelectionSet extends $$SelectionSets.AiringScheduleEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AiringScheduleEdge']>
/**
* Infer result type for AniChartUser selection sets.
*/
export type AniChartUser<$SelectionSet extends $$SelectionSets.AniChartUser> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['AniChartUser']>
/**
* A character that features in an anime or manga
*
* Infer result type for Character selection sets.
*/
export type Character<$SelectionSet extends $$SelectionSets.Character> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Character']>
/**
* Infer result type for CharacterConnection selection sets.
*/
export type CharacterConnection<$SelectionSet extends $$SelectionSets.CharacterConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterConnection']>
/**
* Character connection edge
*
* Infer result type for CharacterEdge selection sets.
*/
export type CharacterEdge<$SelectionSet extends $$SelectionSets.CharacterEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterEdge']>
/**
* Infer result type for CharacterImage selection sets.
*/
export type CharacterImage<$SelectionSet extends $$SelectionSets.CharacterImage> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterImage']>
/**
* The names of the character
*
* Infer result type for CharacterName selection sets.
*/
export type CharacterName<$SelectionSet extends $$SelectionSets.CharacterName> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterName']>
/**
* A submission for a character that features in an anime or manga
*
* Infer result type for CharacterSubmission selection sets.
*/
export type CharacterSubmission<$SelectionSet extends $$SelectionSets.CharacterSubmission> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterSubmission']>
/**
* Infer result type for CharacterSubmissionConnection selection sets.
*/
export type CharacterSubmissionConnection<$SelectionSet extends $$SelectionSets.CharacterSubmissionConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterSubmissionConnection']>
/**
* CharacterSubmission connection edge
*
* Infer result type for CharacterSubmissionEdge selection sets.
*/
export type CharacterSubmissionEdge<$SelectionSet extends $$SelectionSets.CharacterSubmissionEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterSubmissionEdge']>
/**
* Notification for when a character submission is accepted, partially accepted, or rejected
*
* Infer result type for CharacterSubmissionUpdateNotification selection sets.
*/
export type CharacterSubmissionUpdateNotification<$SelectionSet extends $$SelectionSets.CharacterSubmissionUpdateNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['CharacterSubmissionUpdateNotification']>
/**
* Deleted data type
*
* Infer result type for Deleted selection sets.
*/
export type Deleted<$SelectionSet extends $$SelectionSets.Deleted> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Deleted']>
/**
* User's favourite anime, manga, characters, staff & studios
*
* Infer result type for Favourites selection sets.
*/
export type Favourites<$SelectionSet extends $$SelectionSets.Favourites> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Favourites']>
/**
* Notification for when the authenticated user is followed by another user
*
* Infer result type for FollowingNotification selection sets.
*/
export type FollowingNotification<$SelectionSet extends $$SelectionSets.FollowingNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['FollowingNotification']>
/**
* User's format statistics
*
* Infer result type for FormatStats selection sets.
*/
export type FormatStats<$SelectionSet extends $$SelectionSets.FormatStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['FormatStats']>
/**
* Date object that allows for incomplete date values (fuzzy)
*
* Infer result type for FuzzyDate selection sets.
*/
export type FuzzyDate<$SelectionSet extends $$SelectionSets.FuzzyDate> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['FuzzyDate']>
/**
* User's genre statistics
*
* Infer result type for GenreStats selection sets.
*/
export type GenreStats<$SelectionSet extends $$SelectionSets.GenreStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['GenreStats']>
/**
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* Infer result type for InternalPage selection sets.
*/
export type InternalPage<$SelectionSet extends $$SelectionSets.InternalPage> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['InternalPage']>
/**
* User list activity (anime & manga updates)
*
* Infer result type for ListActivity selection sets.
*/
export type ListActivity<$SelectionSet extends $$SelectionSets.ListActivity> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ListActivity']>
/**
* Infer result type for ListActivityOption selection sets.
*/
export type ListActivityOption<$SelectionSet extends $$SelectionSets.ListActivityOption> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ListActivityOption']>
/**
* User's list score statistics
*
* Infer result type for ListScoreStats selection sets.
*/
export type ListScoreStats<$SelectionSet extends $$SelectionSets.ListScoreStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ListScoreStats']>
/**
* Anime or Manga
*
* Infer result type for Media selection sets.
*/
export type Media<$SelectionSet extends $$SelectionSets.Media> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Media']>
/**
* Internal - Media characters separated
*
* Infer result type for MediaCharacter selection sets.
*/
export type MediaCharacter<$SelectionSet extends $$SelectionSets.MediaCharacter> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaCharacter']>
/**
* Infer result type for MediaConnection selection sets.
*/
export type MediaConnection<$SelectionSet extends $$SelectionSets.MediaConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaConnection']>
/**
* Infer result type for MediaCoverImage selection sets.
*/
export type MediaCoverImage<$SelectionSet extends $$SelectionSets.MediaCoverImage> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaCoverImage']>
/**
* Notification for when a media entry's data was changed in a significant way impacting users' list tracking
*
* Infer result type for MediaDataChangeNotification selection sets.
*/
export type MediaDataChangeNotification<$SelectionSet extends $$SelectionSets.MediaDataChangeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaDataChangeNotification']>
/**
* Notification for when a media tracked in a user's list is deleted from the site
*
* Infer result type for MediaDeletionNotification selection sets.
*/
export type MediaDeletionNotification<$SelectionSet extends $$SelectionSets.MediaDeletionNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaDeletionNotification']>
/**
* Media connection edge
*
* Infer result type for MediaEdge selection sets.
*/
export type MediaEdge<$SelectionSet extends $$SelectionSets.MediaEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaEdge']>
/**
* An external link to another site related to the media or staff member
*
* Infer result type for MediaExternalLink selection sets.
*/
export type MediaExternalLink<$SelectionSet extends $$SelectionSets.MediaExternalLink> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaExternalLink']>
/**
* List of anime or manga
*
* Infer result type for MediaList selection sets.
*/
export type MediaList<$SelectionSet extends $$SelectionSets.MediaList> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaList']>
/**
* List of anime or manga
*
* Infer result type for MediaListCollection selection sets.
*/
export type MediaListCollection<$SelectionSet extends $$SelectionSets.MediaListCollection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaListCollection']>
/**
* List group of anime or manga entries
*
* Infer result type for MediaListGroup selection sets.
*/
export type MediaListGroup<$SelectionSet extends $$SelectionSets.MediaListGroup> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaListGroup']>
/**
* A user's list options
*
* Infer result type for MediaListOptions selection sets.
*/
export type MediaListOptions<$SelectionSet extends $$SelectionSets.MediaListOptions> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaListOptions']>
/**
* A user's list options for anime or manga lists
*
* Infer result type for MediaListTypeOptions selection sets.
*/
export type MediaListTypeOptions<$SelectionSet extends $$SelectionSets.MediaListTypeOptions> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaListTypeOptions']>
/**
* Notification for when a media entry is merged into another for a user who had it on their list
*
* Infer result type for MediaMergeNotification selection sets.
*/
export type MediaMergeNotification<$SelectionSet extends $$SelectionSets.MediaMergeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaMergeNotification']>
/**
* The ranking of a media in a particular time span and format compared to other media
*
* Infer result type for MediaRank selection sets.
*/
export type MediaRank<$SelectionSet extends $$SelectionSets.MediaRank> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaRank']>
/**
* A media's statistics
*
* Infer result type for MediaStats selection sets.
*/
export type MediaStats<$SelectionSet extends $$SelectionSets.MediaStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaStats']>
/**
* Data and links to legal streaming episodes on external sites
*
* Infer result type for MediaStreamingEpisode selection sets.
*/
export type MediaStreamingEpisode<$SelectionSet extends $$SelectionSets.MediaStreamingEpisode> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaStreamingEpisode']>
/**
* Media submission
*
* Infer result type for MediaSubmission selection sets.
*/
export type MediaSubmission<$SelectionSet extends $$SelectionSets.MediaSubmission> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaSubmission']>
/**
* Media submission with comparison to current data
*
* Infer result type for MediaSubmissionComparison selection sets.
*/
export type MediaSubmissionComparison<$SelectionSet extends $$SelectionSets.MediaSubmissionComparison> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaSubmissionComparison']>
/**
* Infer result type for MediaSubmissionEdge selection sets.
*/
export type MediaSubmissionEdge<$SelectionSet extends $$SelectionSets.MediaSubmissionEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaSubmissionEdge']>
/**
* Notification for when a media submission is accepted, partially accepted, or rejected
*
* Infer result type for MediaSubmissionUpdateNotification selection sets.
*/
export type MediaSubmissionUpdateNotification<$SelectionSet extends $$SelectionSets.MediaSubmissionUpdateNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaSubmissionUpdateNotification']>
/**
* A tag that describes a theme or element of the media
*
* Infer result type for MediaTag selection sets.
*/
export type MediaTag<$SelectionSet extends $$SelectionSets.MediaTag> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTag']>
/**
* The official titles of the media in various languages
*
* Infer result type for MediaTitle selection sets.
*/
export type MediaTitle<$SelectionSet extends $$SelectionSets.MediaTitle> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTitle']>
/**
* Media trailer or advertisement
*
* Infer result type for MediaTrailer selection sets.
*/
export type MediaTrailer<$SelectionSet extends $$SelectionSets.MediaTrailer> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTrailer']>
/**
* Daily media statistics
*
* Infer result type for MediaTrend selection sets.
*/
export type MediaTrend<$SelectionSet extends $$SelectionSets.MediaTrend> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTrend']>
/**
* Infer result type for MediaTrendConnection selection sets.
*/
export type MediaTrendConnection<$SelectionSet extends $$SelectionSets.MediaTrendConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTrendConnection']>
/**
* Media trend connection edge
*
* Infer result type for MediaTrendEdge selection sets.
*/
export type MediaTrendEdge<$SelectionSet extends $$SelectionSets.MediaTrendEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MediaTrendEdge']>
/**
* User message activity
*
* Infer result type for MessageActivity selection sets.
*/
export type MessageActivity<$SelectionSet extends $$SelectionSets.MessageActivity> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['MessageActivity']>
/**
* Infer result type for ModAction selection sets.
*/
export type ModAction<$SelectionSet extends $$SelectionSets.ModAction> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ModAction']>
/**
* Notification option
*
* Infer result type for NotificationOption selection sets.
*/
export type NotificationOption<$SelectionSet extends $$SelectionSets.NotificationOption> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['NotificationOption']>
/**
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* Infer result type for Page selection sets.
*/
export type Page<$SelectionSet extends $$SelectionSets.Page> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Page']>
/**
* Infer result type for PageInfo selection sets.
*/
export type PageInfo<$SelectionSet extends $$SelectionSets.PageInfo> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['PageInfo']>
/**
* Provides the parsed markdown as html
*
* Infer result type for ParsedMarkdown selection sets.
*/
export type ParsedMarkdown<$SelectionSet extends $$SelectionSets.ParsedMarkdown> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ParsedMarkdown']>
/**
* Media recommendation
*
* Infer result type for Recommendation selection sets.
*/
export type Recommendation<$SelectionSet extends $$SelectionSets.Recommendation> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Recommendation']>
/**
* Infer result type for RecommendationConnection selection sets.
*/
export type RecommendationConnection<$SelectionSet extends $$SelectionSets.RecommendationConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['RecommendationConnection']>
/**
* Recommendation connection edge
*
* Infer result type for RecommendationEdge selection sets.
*/
export type RecommendationEdge<$SelectionSet extends $$SelectionSets.RecommendationEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['RecommendationEdge']>
/**
* Notification for when new media is added to the site
*
* Infer result type for RelatedMediaAdditionNotification selection sets.
*/
export type RelatedMediaAdditionNotification<$SelectionSet extends $$SelectionSets.RelatedMediaAdditionNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['RelatedMediaAdditionNotification']>
/**
* Infer result type for Report selection sets.
*/
export type Report<$SelectionSet extends $$SelectionSets.Report> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Report']>
/**
* A Review that features in an anime or manga
*
* Infer result type for Review selection sets.
*/
export type Review<$SelectionSet extends $$SelectionSets.Review> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Review']>
/**
* Infer result type for ReviewConnection selection sets.
*/
export type ReviewConnection<$SelectionSet extends $$SelectionSets.ReviewConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ReviewConnection']>
/**
* Review connection edge
*
* Infer result type for ReviewEdge selection sets.
*/
export type ReviewEdge<$SelectionSet extends $$SelectionSets.ReviewEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ReviewEdge']>
/**
* Feed of mod edit activity
*
* Infer result type for RevisionHistory selection sets.
*/
export type RevisionHistory<$SelectionSet extends $$SelectionSets.RevisionHistory> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['RevisionHistory']>
/**
* A user's list score distribution.
*
* Infer result type for ScoreDistribution selection sets.
*/
export type ScoreDistribution<$SelectionSet extends $$SelectionSets.ScoreDistribution> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ScoreDistribution']>
/**
* Infer result type for SiteStatistics selection sets.
*/
export type SiteStatistics<$SelectionSet extends $$SelectionSets.SiteStatistics> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['SiteStatistics']>
/**
* Daily site statistics
*
* Infer result type for SiteTrend selection sets.
*/
export type SiteTrend<$SelectionSet extends $$SelectionSets.SiteTrend> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['SiteTrend']>
/**
* Infer result type for SiteTrendConnection selection sets.
*/
export type SiteTrendConnection<$SelectionSet extends $$SelectionSets.SiteTrendConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['SiteTrendConnection']>
/**
* Site trend connection edge
*
* Infer result type for SiteTrendEdge selection sets.
*/
export type SiteTrendEdge<$SelectionSet extends $$SelectionSets.SiteTrendEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['SiteTrendEdge']>
/**
* Voice actors or production staff
*
* Infer result type for Staff selection sets.
*/
export type Staff<$SelectionSet extends $$SelectionSets.Staff> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Staff']>
/**
* Infer result type for StaffConnection selection sets.
*/
export type StaffConnection<$SelectionSet extends $$SelectionSets.StaffConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffConnection']>
/**
* Staff connection edge
*
* Infer result type for StaffEdge selection sets.
*/
export type StaffEdge<$SelectionSet extends $$SelectionSets.StaffEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffEdge']>
/**
* Infer result type for StaffImage selection sets.
*/
export type StaffImage<$SelectionSet extends $$SelectionSets.StaffImage> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffImage']>
/**
* The names of the staff member
*
* Infer result type for StaffName selection sets.
*/
export type StaffName<$SelectionSet extends $$SelectionSets.StaffName> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffName']>
/**
* Voice actor role for a character
*
* Infer result type for StaffRoleType selection sets.
*/
export type StaffRoleType<$SelectionSet extends $$SelectionSets.StaffRoleType> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffRoleType']>
/**
* User's staff statistics
*
* Infer result type for StaffStats selection sets.
*/
export type StaffStats<$SelectionSet extends $$SelectionSets.StaffStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffStats']>
/**
* A submission for a staff that features in an anime or manga
*
* Infer result type for StaffSubmission selection sets.
*/
export type StaffSubmission<$SelectionSet extends $$SelectionSets.StaffSubmission> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffSubmission']>
/**
* Notification for when a staff submission is accepted, partially accepted, or rejected
*
* Infer result type for StaffSubmissionUpdateNotification selection sets.
*/
export type StaffSubmissionUpdateNotification<$SelectionSet extends $$SelectionSets.StaffSubmissionUpdateNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StaffSubmissionUpdateNotification']>
/**
* The distribution of the watching/reading status of media or a user's list
*
* Infer result type for StatusDistribution selection sets.
*/
export type StatusDistribution<$SelectionSet extends $$SelectionSets.StatusDistribution> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StatusDistribution']>
/**
* Animation or production company
*
* Infer result type for Studio selection sets.
*/
export type Studio<$SelectionSet extends $$SelectionSets.Studio> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Studio']>
/**
* Infer result type for StudioConnection selection sets.
*/
export type StudioConnection<$SelectionSet extends $$SelectionSets.StudioConnection> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StudioConnection']>
/**
* Studio connection edge
*
* Infer result type for StudioEdge selection sets.
*/
export type StudioEdge<$SelectionSet extends $$SelectionSets.StudioEdge> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StudioEdge']>
/**
* User's studio statistics
*
* Infer result type for StudioStats selection sets.
*/
export type StudioStats<$SelectionSet extends $$SelectionSets.StudioStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['StudioStats']>
/**
* User's tag statistics
*
* Infer result type for TagStats selection sets.
*/
export type TagStats<$SelectionSet extends $$SelectionSets.TagStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['TagStats']>
/**
* User text activity
*
* Infer result type for TextActivity selection sets.
*/
export type TextActivity<$SelectionSet extends $$SelectionSets.TextActivity> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['TextActivity']>
/**
* Forum Thread
*
* Infer result type for Thread selection sets.
*/
export type Thread<$SelectionSet extends $$SelectionSets.Thread> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['Thread']>
/**
* A forum thread category
*
* Infer result type for ThreadCategory selection sets.
*/
export type ThreadCategory<$SelectionSet extends $$SelectionSets.ThreadCategory> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadCategory']>
/**
* Forum Thread Comment
*
* Infer result type for ThreadComment selection sets.
*/
export type ThreadComment<$SelectionSet extends $$SelectionSets.ThreadComment> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadComment']>
/**
* Notification for when a thread comment is liked
*
* Infer result type for ThreadCommentLikeNotification selection sets.
*/
export type ThreadCommentLikeNotification<$SelectionSet extends $$SelectionSets.ThreadCommentLikeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadCommentLikeNotification']>
/**
* Notification for when authenticated user is @ mentioned in a forum thread comment
*
* Infer result type for ThreadCommentMentionNotification selection sets.
*/
export type ThreadCommentMentionNotification<$SelectionSet extends $$SelectionSets.ThreadCommentMentionNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadCommentMentionNotification']>
/**
* Notification for when a user replies to your forum thread comment
*
* Infer result type for ThreadCommentReplyNotification selection sets.
*/
export type ThreadCommentReplyNotification<$SelectionSet extends $$SelectionSets.ThreadCommentReplyNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadCommentReplyNotification']>
/**
* Notification for when a user replies to a subscribed forum thread
*
* Infer result type for ThreadCommentSubscribedNotification selection sets.
*/
export type ThreadCommentSubscribedNotification<$SelectionSet extends $$SelectionSets.ThreadCommentSubscribedNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadCommentSubscribedNotification']>
/**
* Notification for when a thread is liked
*
* Infer result type for ThreadLikeNotification selection sets.
*/
export type ThreadLikeNotification<$SelectionSet extends $$SelectionSets.ThreadLikeNotification> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ThreadLikeNotification']>
/**
* A user
*
* Infer result type for User selection sets.
*/
export type User<$SelectionSet extends $$SelectionSets.User> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['User']>
/**
* A user's activity history stats.
*
* Infer result type for UserActivityHistory selection sets.
*/
export type UserActivityHistory<$SelectionSet extends $$SelectionSets.UserActivityHistory> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserActivityHistory']>
/**
* A user's avatars
*
* Infer result type for UserAvatar selection sets.
*/
export type UserAvatar<$SelectionSet extends $$SelectionSets.UserAvatar> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserAvatar']>
/**
* Infer result type for UserCountryStatistic selection sets.
*/
export type UserCountryStatistic<$SelectionSet extends $$SelectionSets.UserCountryStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserCountryStatistic']>
/**
* Infer result type for UserFormatStatistic selection sets.
*/
export type UserFormatStatistic<$SelectionSet extends $$SelectionSets.UserFormatStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserFormatStatistic']>
/**
* Infer result type for UserGenreStatistic selection sets.
*/
export type UserGenreStatistic<$SelectionSet extends $$SelectionSets.UserGenreStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserGenreStatistic']>
/**
* Infer result type for UserLengthStatistic selection sets.
*/
export type UserLengthStatistic<$SelectionSet extends $$SelectionSets.UserLengthStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserLengthStatistic']>
/**
* User data for moderators
*
* Infer result type for UserModData selection sets.
*/
export type UserModData<$SelectionSet extends $$SelectionSets.UserModData> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserModData']>
/**
* A user's general options
*
* Infer result type for UserOptions selection sets.
*/
export type UserOptions<$SelectionSet extends $$SelectionSets.UserOptions> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserOptions']>
/**
* A user's previous name
*
* Infer result type for UserPreviousName selection sets.
*/
export type UserPreviousName<$SelectionSet extends $$SelectionSets.UserPreviousName> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserPreviousName']>
/**
* Infer result type for UserReleaseYearStatistic selection sets.
*/
export type UserReleaseYearStatistic<$SelectionSet extends $$SelectionSets.UserReleaseYearStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserReleaseYearStatistic']>
/**
* Infer result type for UserScoreStatistic selection sets.
*/
export type UserScoreStatistic<$SelectionSet extends $$SelectionSets.UserScoreStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserScoreStatistic']>
/**
* Infer result type for UserStaffStatistic selection sets.
*/
export type UserStaffStatistic<$SelectionSet extends $$SelectionSets.UserStaffStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStaffStatistic']>
/**
* Infer result type for UserStartYearStatistic selection sets.
*/
export type UserStartYearStatistic<$SelectionSet extends $$SelectionSets.UserStartYearStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStartYearStatistic']>
/**
* Infer result type for UserStatistics selection sets.
*/
export type UserStatistics<$SelectionSet extends $$SelectionSets.UserStatistics> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStatistics']>
/**
* Infer result type for UserStatisticTypes selection sets.
*/
export type UserStatisticTypes<$SelectionSet extends $$SelectionSets.UserStatisticTypes> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStatisticTypes']>
/**
* A user's statistics
*
* Infer result type for UserStats selection sets.
*/
export type UserStats<$SelectionSet extends $$SelectionSets.UserStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStats']>
/**
* Infer result type for UserStatusStatistic selection sets.
*/
export type UserStatusStatistic<$SelectionSet extends $$SelectionSets.UserStatusStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStatusStatistic']>
/**
* Infer result type for UserStudioStatistic selection sets.
*/
export type UserStudioStatistic<$SelectionSet extends $$SelectionSets.UserStudioStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserStudioStatistic']>
/**
* Infer result type for UserTagStatistic selection sets.
*/
export type UserTagStatistic<$SelectionSet extends $$SelectionSets.UserTagStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserTagStatistic']>
/**
* Infer result type for UserVoiceActorStatistic selection sets.
*/
export type UserVoiceActorStatistic<$SelectionSet extends $$SelectionSets.UserVoiceActorStatistic> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['UserVoiceActorStatistic']>
/**
* User's year statistics
*
* Infer result type for YearStats selection sets.
*/
export type YearStats<$SelectionSet extends $$SelectionSets.YearStats> = GraphqlKit.Document.Object.InferResult.OutputObjectLike<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['YearStats']>


    //                                               Union
    // --------------------------------------------------------------------------------------------------
    //

/**
* Activity union type
*
* Infer result type for ActivityUnion selection sets.
*/
export type ActivityUnion<$SelectionSet extends $$SelectionSets.ActivityUnion> = GraphqlKit.Document.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['ActivityUnion']>
/**
* Likeable union type
*
* Infer result type for LikeableUnion selection sets.
*/
export type LikeableUnion<$SelectionSet extends $$SelectionSets.LikeableUnion> = GraphqlKit.Document.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['LikeableUnion']>
/**
* Notification union type
*
* Infer result type for NotificationUnion selection sets.
*/
export type NotificationUnion<$SelectionSet extends $$SelectionSets.NotificationUnion> = GraphqlKit.Document.Object.InferResult.Union<$SelectionSet, $$Schema.Schema, $$Schema.Schema['allTypes']['NotificationUnion']>


    //                                             Interface
    // --------------------------------------------------------------------------------------------------
    //

}