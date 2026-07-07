import * as $$SelectionSets from './selection-sets/_.js'
import type * as $$Utilities from 'graffle/utilities-for-generated'


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                      Select Methods Interface
    // ==================================================================================================
    //
    //
    //
    //
    //
    //



      /**
       * Selection method types for building native GraphQL documents.
       *
       * Maps each GraphQL schema type to its corresponding selection method interface.
       * These methods are available on `.select()` to build type-safe selection sets
       * that return the selection set itself (for document building).
       */

export interface $MethodsSelect {
Query: Query,
Mutation: Mutation,
ActivityLikeNotification: ActivityLikeNotification,
ActivityMentionNotification: ActivityMentionNotification,
ActivityMessageNotification: ActivityMessageNotification,
ActivityReply: ActivityReply,
ActivityReplyLikeNotification: ActivityReplyLikeNotification,
ActivityReplyNotification: ActivityReplyNotification,
ActivityReplySubscribedNotification: ActivityReplySubscribedNotification,
AiringNotification: AiringNotification,
AiringProgression: AiringProgression,
AiringSchedule: AiringSchedule,
AiringScheduleConnection: AiringScheduleConnection,
AiringScheduleEdge: AiringScheduleEdge,
AniChartUser: AniChartUser,
Character: Character,
CharacterConnection: CharacterConnection,
CharacterEdge: CharacterEdge,
CharacterImage: CharacterImage,
CharacterName: CharacterName,
CharacterSubmission: CharacterSubmission,
CharacterSubmissionConnection: CharacterSubmissionConnection,
CharacterSubmissionEdge: CharacterSubmissionEdge,
CharacterSubmissionUpdateNotification: CharacterSubmissionUpdateNotification,
Deleted: Deleted,
Favourites: Favourites,
FollowingNotification: FollowingNotification,
FormatStats: FormatStats,
FuzzyDate: FuzzyDate,
GenreStats: GenreStats,
InternalPage: InternalPage,
ListActivity: ListActivity,
ListActivityOption: ListActivityOption,
ListScoreStats: ListScoreStats,
Media: Media,
MediaCharacter: MediaCharacter,
MediaConnection: MediaConnection,
MediaCoverImage: MediaCoverImage,
MediaDataChangeNotification: MediaDataChangeNotification,
MediaDeletionNotification: MediaDeletionNotification,
MediaEdge: MediaEdge,
MediaExternalLink: MediaExternalLink,
MediaList: MediaList,
MediaListCollection: MediaListCollection,
MediaListGroup: MediaListGroup,
MediaListOptions: MediaListOptions,
MediaListTypeOptions: MediaListTypeOptions,
MediaMergeNotification: MediaMergeNotification,
MediaRank: MediaRank,
MediaStats: MediaStats,
MediaStreamingEpisode: MediaStreamingEpisode,
MediaSubmission: MediaSubmission,
MediaSubmissionComparison: MediaSubmissionComparison,
MediaSubmissionEdge: MediaSubmissionEdge,
MediaSubmissionUpdateNotification: MediaSubmissionUpdateNotification,
MediaTag: MediaTag,
MediaTitle: MediaTitle,
MediaTrailer: MediaTrailer,
MediaTrend: MediaTrend,
MediaTrendConnection: MediaTrendConnection,
MediaTrendEdge: MediaTrendEdge,
MessageActivity: MessageActivity,
ModAction: ModAction,
NotificationOption: NotificationOption,
Page: Page,
PageInfo: PageInfo,
ParsedMarkdown: ParsedMarkdown,
Recommendation: Recommendation,
RecommendationConnection: RecommendationConnection,
RecommendationEdge: RecommendationEdge,
RelatedMediaAdditionNotification: RelatedMediaAdditionNotification,
Report: Report,
Review: Review,
ReviewConnection: ReviewConnection,
ReviewEdge: ReviewEdge,
RevisionHistory: RevisionHistory,
ScoreDistribution: ScoreDistribution,
SiteStatistics: SiteStatistics,
SiteTrend: SiteTrend,
SiteTrendConnection: SiteTrendConnection,
SiteTrendEdge: SiteTrendEdge,
Staff: Staff,
StaffConnection: StaffConnection,
StaffEdge: StaffEdge,
StaffImage: StaffImage,
StaffName: StaffName,
StaffRoleType: StaffRoleType,
StaffStats: StaffStats,
StaffSubmission: StaffSubmission,
StaffSubmissionUpdateNotification: StaffSubmissionUpdateNotification,
StatusDistribution: StatusDistribution,
Studio: Studio,
StudioConnection: StudioConnection,
StudioEdge: StudioEdge,
StudioStats: StudioStats,
TagStats: TagStats,
TextActivity: TextActivity,
Thread: Thread,
ThreadCategory: ThreadCategory,
ThreadComment: ThreadComment,
ThreadCommentLikeNotification: ThreadCommentLikeNotification,
ThreadCommentMentionNotification: ThreadCommentMentionNotification,
ThreadCommentReplyNotification: ThreadCommentReplyNotification,
ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification,
ThreadLikeNotification: ThreadLikeNotification,
User: User,
UserActivityHistory: UserActivityHistory,
UserAvatar: UserAvatar,
UserCountryStatistic: UserCountryStatistic,
UserFormatStatistic: UserFormatStatistic,
UserGenreStatistic: UserGenreStatistic,
UserLengthStatistic: UserLengthStatistic,
UserModData: UserModData,
UserOptions: UserOptions,
UserPreviousName: UserPreviousName,
UserReleaseYearStatistic: UserReleaseYearStatistic,
UserScoreStatistic: UserScoreStatistic,
UserStaffStatistic: UserStaffStatistic,
UserStartYearStatistic: UserStartYearStatistic,
UserStatistics: UserStatistics,
UserStatisticTypes: UserStatisticTypes,
UserStats: UserStats,
UserStatusStatistic: UserStatusStatistic,
UserStudioStatistic: UserStudioStatistic,
UserTagStatistic: UserTagStatistic,
UserVoiceActorStatistic: UserVoiceActorStatistic,
YearStats: YearStats,
ActivityUnion: ActivityUnion,
LikeableUnion: LikeableUnion,
NotificationUnion: NotificationUnion
}


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                                Root
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


/**
* Build type-safe selection set for Query.
*/
export interface Query {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for Mutation.
*/
export interface Mutation {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation>):
              $SelectionSet
          
}


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                            OutputObject
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


/**
* Notification for when a activity is liked
*
* Build type-safe selection set for ActivityLikeNotification.
*/
export interface ActivityLikeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityLikeNotification>):
              $SelectionSet
          
}

/**
* Notification for when authenticated user is @ mentioned in activity or reply
*
* Build type-safe selection set for ActivityMentionNotification.
*/
export interface ActivityMentionNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityMentionNotification>):
              $SelectionSet
          
}

/**
* Notification for when a user is send an activity message
*
* Build type-safe selection set for ActivityMessageNotification.
*/
export interface ActivityMessageNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityMessageNotification>):
              $SelectionSet
          
}

/**
* Replay to an activity item
*
* Build type-safe selection set for ActivityReply.
*/
export interface ActivityReply {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityReply>):
              $SelectionSet
          
}

/**
* Notification for when a activity reply is liked
*
* Build type-safe selection set for ActivityReplyLikeNotification.
*/
export interface ActivityReplyLikeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityReplyLikeNotification>):
              $SelectionSet
          
}

/**
* Notification for when a user replies to the authenticated users activity
*
* Build type-safe selection set for ActivityReplyNotification.
*/
export interface ActivityReplyNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityReplyNotification>):
              $SelectionSet
          
}

/**
* Notification for when a user replies to activity the authenticated user has replied to
*
* Build type-safe selection set for ActivityReplySubscribedNotification.
*/
export interface ActivityReplySubscribedNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityReplySubscribedNotification>):
              $SelectionSet
          
}

/**
* Notification for when an episode of anime airs
*
* Build type-safe selection set for AiringNotification.
*/
export interface AiringNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AiringNotification>):
              $SelectionSet
          
}

/**
* Score & Watcher stats for airing anime by episode and mid-week
*
* Build type-safe selection set for AiringProgression.
*/
export interface AiringProgression {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AiringProgression>):
              $SelectionSet
          
}

/**
* Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
*
* Build type-safe selection set for AiringSchedule.
*/
export interface AiringSchedule {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AiringSchedule>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for AiringScheduleConnection.
*/
export interface AiringScheduleConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AiringScheduleConnection>):
              $SelectionSet
          
}

/**
* AiringSchedule connection edge
*
* Build type-safe selection set for AiringScheduleEdge.
*/
export interface AiringScheduleEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AiringScheduleEdge>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for AniChartUser.
*/
export interface AniChartUser {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.AniChartUser>):
              $SelectionSet
          
}

/**
* A character that features in an anime or manga
*
* Build type-safe selection set for Character.
*/
export interface Character {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Character>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for CharacterConnection.
*/
export interface CharacterConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterConnection>):
              $SelectionSet
          
}

/**
* Character connection edge
*
* Build type-safe selection set for CharacterEdge.
*/
export interface CharacterEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterEdge>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for CharacterImage.
*/
export interface CharacterImage {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterImage>):
              $SelectionSet
          
}

/**
* The names of the character
*
* Build type-safe selection set for CharacterName.
*/
export interface CharacterName {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterName>):
              $SelectionSet
          
}

/**
* A submission for a character that features in an anime or manga
*
* Build type-safe selection set for CharacterSubmission.
*/
export interface CharacterSubmission {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterSubmission>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for CharacterSubmissionConnection.
*/
export interface CharacterSubmissionConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterSubmissionConnection>):
              $SelectionSet
          
}

/**
* CharacterSubmission connection edge
*
* Build type-safe selection set for CharacterSubmissionEdge.
*/
export interface CharacterSubmissionEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterSubmissionEdge>):
              $SelectionSet
          
}

/**
* Notification for when a character submission is accepted, partially accepted, or rejected
*
* Build type-safe selection set for CharacterSubmissionUpdateNotification.
*/
export interface CharacterSubmissionUpdateNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CharacterSubmissionUpdateNotification>):
              $SelectionSet
          
}

/**
* Deleted data type
*
* Build type-safe selection set for Deleted.
*/
export interface Deleted {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Deleted>):
              $SelectionSet
          
}

/**
* User's favourite anime, manga, characters, staff & studios
*
* Build type-safe selection set for Favourites.
*/
export interface Favourites {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Favourites>):
              $SelectionSet
          
}

/**
* Notification for when the authenticated user is followed by another user
*
* Build type-safe selection set for FollowingNotification.
*/
export interface FollowingNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.FollowingNotification>):
              $SelectionSet
          
}

/**
* User's format statistics
*
* Build type-safe selection set for FormatStats.
*/
export interface FormatStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.FormatStats>):
              $SelectionSet
          
}

/**
* Date object that allows for incomplete date values (fuzzy)
*
* Build type-safe selection set for FuzzyDate.
*/
export interface FuzzyDate {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.FuzzyDate>):
              $SelectionSet
          
}

/**
* User's genre statistics
*
* Build type-safe selection set for GenreStats.
*/
export interface GenreStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.GenreStats>):
              $SelectionSet
          
}

/**
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* Build type-safe selection set for InternalPage.
*/
export interface InternalPage {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.InternalPage>):
              $SelectionSet
          
}

/**
* User list activity (anime & manga updates)
*
* Build type-safe selection set for ListActivity.
*/
export interface ListActivity {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ListActivity>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for ListActivityOption.
*/
export interface ListActivityOption {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ListActivityOption>):
              $SelectionSet
          
}

/**
* User's list score statistics
*
* Build type-safe selection set for ListScoreStats.
*/
export interface ListScoreStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ListScoreStats>):
              $SelectionSet
          
}

/**
* Anime or Manga
*
* Build type-safe selection set for Media.
*/
export interface Media {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Media>):
              $SelectionSet
          
}

/**
* Internal - Media characters separated
*
* Build type-safe selection set for MediaCharacter.
*/
export interface MediaCharacter {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaCharacter>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for MediaConnection.
*/
export interface MediaConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaConnection>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for MediaCoverImage.
*/
export interface MediaCoverImage {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaCoverImage>):
              $SelectionSet
          
}

/**
* Notification for when a media entry's data was changed in a significant way impacting users' list tracking
*
* Build type-safe selection set for MediaDataChangeNotification.
*/
export interface MediaDataChangeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaDataChangeNotification>):
              $SelectionSet
          
}

/**
* Notification for when a media tracked in a user's list is deleted from the site
*
* Build type-safe selection set for MediaDeletionNotification.
*/
export interface MediaDeletionNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaDeletionNotification>):
              $SelectionSet
          
}

/**
* Media connection edge
*
* Build type-safe selection set for MediaEdge.
*/
export interface MediaEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaEdge>):
              $SelectionSet
          
}

/**
* An external link to another site related to the media or staff member
*
* Build type-safe selection set for MediaExternalLink.
*/
export interface MediaExternalLink {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaExternalLink>):
              $SelectionSet
          
}

/**
* List of anime or manga
*
* Build type-safe selection set for MediaList.
*/
export interface MediaList {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaList>):
              $SelectionSet
          
}

/**
* List of anime or manga
*
* Build type-safe selection set for MediaListCollection.
*/
export interface MediaListCollection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaListCollection>):
              $SelectionSet
          
}

/**
* List group of anime or manga entries
*
* Build type-safe selection set for MediaListGroup.
*/
export interface MediaListGroup {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaListGroup>):
              $SelectionSet
          
}

/**
* A user's list options
*
* Build type-safe selection set for MediaListOptions.
*/
export interface MediaListOptions {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaListOptions>):
              $SelectionSet
          
}

/**
* A user's list options for anime or manga lists
*
* Build type-safe selection set for MediaListTypeOptions.
*/
export interface MediaListTypeOptions {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaListTypeOptions>):
              $SelectionSet
          
}

/**
* Notification for when a media entry is merged into another for a user who had it on their list
*
* Build type-safe selection set for MediaMergeNotification.
*/
export interface MediaMergeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaMergeNotification>):
              $SelectionSet
          
}

/**
* The ranking of a media in a particular time span and format compared to other media
*
* Build type-safe selection set for MediaRank.
*/
export interface MediaRank {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaRank>):
              $SelectionSet
          
}

/**
* A media's statistics
*
* Build type-safe selection set for MediaStats.
*/
export interface MediaStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaStats>):
              $SelectionSet
          
}

/**
* Data and links to legal streaming episodes on external sites
*
* Build type-safe selection set for MediaStreamingEpisode.
*/
export interface MediaStreamingEpisode {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaStreamingEpisode>):
              $SelectionSet
          
}

/**
* Media submission
*
* Build type-safe selection set for MediaSubmission.
*/
export interface MediaSubmission {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaSubmission>):
              $SelectionSet
          
}

/**
* Media submission with comparison to current data
*
* Build type-safe selection set for MediaSubmissionComparison.
*/
export interface MediaSubmissionComparison {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaSubmissionComparison>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for MediaSubmissionEdge.
*/
export interface MediaSubmissionEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaSubmissionEdge>):
              $SelectionSet
          
}

/**
* Notification for when a media submission is accepted, partially accepted, or rejected
*
* Build type-safe selection set for MediaSubmissionUpdateNotification.
*/
export interface MediaSubmissionUpdateNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaSubmissionUpdateNotification>):
              $SelectionSet
          
}

/**
* A tag that describes a theme or element of the media
*
* Build type-safe selection set for MediaTag.
*/
export interface MediaTag {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTag>):
              $SelectionSet
          
}

/**
* The official titles of the media in various languages
*
* Build type-safe selection set for MediaTitle.
*/
export interface MediaTitle {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTitle>):
              $SelectionSet
          
}

/**
* Media trailer or advertisement
*
* Build type-safe selection set for MediaTrailer.
*/
export interface MediaTrailer {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTrailer>):
              $SelectionSet
          
}

/**
* Daily media statistics
*
* Build type-safe selection set for MediaTrend.
*/
export interface MediaTrend {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTrend>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for MediaTrendConnection.
*/
export interface MediaTrendConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTrendConnection>):
              $SelectionSet
          
}

/**
* Media trend connection edge
*
* Build type-safe selection set for MediaTrendEdge.
*/
export interface MediaTrendEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MediaTrendEdge>):
              $SelectionSet
          
}

/**
* User message activity
*
* Build type-safe selection set for MessageActivity.
*/
export interface MessageActivity {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.MessageActivity>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for ModAction.
*/
export interface ModAction {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ModAction>):
              $SelectionSet
          
}

/**
* Notification option
*
* Build type-safe selection set for NotificationOption.
*/
export interface NotificationOption {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.NotificationOption>):
              $SelectionSet
          
}

/**
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* Build type-safe selection set for Page.
*/
export interface Page {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Page>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for PageInfo.
*/
export interface PageInfo {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.PageInfo>):
              $SelectionSet
          
}

/**
* Provides the parsed markdown as html
*
* Build type-safe selection set for ParsedMarkdown.
*/
export interface ParsedMarkdown {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ParsedMarkdown>):
              $SelectionSet
          
}

/**
* Media recommendation
*
* Build type-safe selection set for Recommendation.
*/
export interface Recommendation {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Recommendation>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for RecommendationConnection.
*/
export interface RecommendationConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.RecommendationConnection>):
              $SelectionSet
          
}

/**
* Recommendation connection edge
*
* Build type-safe selection set for RecommendationEdge.
*/
export interface RecommendationEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.RecommendationEdge>):
              $SelectionSet
          
}

/**
* Notification for when new media is added to the site
*
* Build type-safe selection set for RelatedMediaAdditionNotification.
*/
export interface RelatedMediaAdditionNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.RelatedMediaAdditionNotification>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for Report.
*/
export interface Report {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Report>):
              $SelectionSet
          
}

/**
* A Review that features in an anime or manga
*
* Build type-safe selection set for Review.
*/
export interface Review {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Review>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for ReviewConnection.
*/
export interface ReviewConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ReviewConnection>):
              $SelectionSet
          
}

/**
* Review connection edge
*
* Build type-safe selection set for ReviewEdge.
*/
export interface ReviewEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ReviewEdge>):
              $SelectionSet
          
}

/**
* Feed of mod edit activity
*
* Build type-safe selection set for RevisionHistory.
*/
export interface RevisionHistory {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.RevisionHistory>):
              $SelectionSet
          
}

/**
* A user's list score distribution.
*
* Build type-safe selection set for ScoreDistribution.
*/
export interface ScoreDistribution {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ScoreDistribution>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for SiteStatistics.
*/
export interface SiteStatistics {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.SiteStatistics>):
              $SelectionSet
          
}

/**
* Daily site statistics
*
* Build type-safe selection set for SiteTrend.
*/
export interface SiteTrend {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.SiteTrend>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for SiteTrendConnection.
*/
export interface SiteTrendConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.SiteTrendConnection>):
              $SelectionSet
          
}

/**
* Site trend connection edge
*
* Build type-safe selection set for SiteTrendEdge.
*/
export interface SiteTrendEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.SiteTrendEdge>):
              $SelectionSet
          
}

/**
* Voice actors or production staff
*
* Build type-safe selection set for Staff.
*/
export interface Staff {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Staff>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for StaffConnection.
*/
export interface StaffConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffConnection>):
              $SelectionSet
          
}

/**
* Staff connection edge
*
* Build type-safe selection set for StaffEdge.
*/
export interface StaffEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffEdge>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for StaffImage.
*/
export interface StaffImage {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffImage>):
              $SelectionSet
          
}

/**
* The names of the staff member
*
* Build type-safe selection set for StaffName.
*/
export interface StaffName {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffName>):
              $SelectionSet
          
}

/**
* Voice actor role for a character
*
* Build type-safe selection set for StaffRoleType.
*/
export interface StaffRoleType {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffRoleType>):
              $SelectionSet
          
}

/**
* User's staff statistics
*
* Build type-safe selection set for StaffStats.
*/
export interface StaffStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffStats>):
              $SelectionSet
          
}

/**
* A submission for a staff that features in an anime or manga
*
* Build type-safe selection set for StaffSubmission.
*/
export interface StaffSubmission {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffSubmission>):
              $SelectionSet
          
}

/**
* Notification for when a staff submission is accepted, partially accepted, or rejected
*
* Build type-safe selection set for StaffSubmissionUpdateNotification.
*/
export interface StaffSubmissionUpdateNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StaffSubmissionUpdateNotification>):
              $SelectionSet
          
}

/**
* The distribution of the watching/reading status of media or a user's list
*
* Build type-safe selection set for StatusDistribution.
*/
export interface StatusDistribution {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StatusDistribution>):
              $SelectionSet
          
}

/**
* Animation or production company
*
* Build type-safe selection set for Studio.
*/
export interface Studio {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Studio>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for StudioConnection.
*/
export interface StudioConnection {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StudioConnection>):
              $SelectionSet
          
}

/**
* Studio connection edge
*
* Build type-safe selection set for StudioEdge.
*/
export interface StudioEdge {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StudioEdge>):
              $SelectionSet
          
}

/**
* User's studio statistics
*
* Build type-safe selection set for StudioStats.
*/
export interface StudioStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.StudioStats>):
              $SelectionSet
          
}

/**
* User's tag statistics
*
* Build type-safe selection set for TagStats.
*/
export interface TagStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.TagStats>):
              $SelectionSet
          
}

/**
* User text activity
*
* Build type-safe selection set for TextActivity.
*/
export interface TextActivity {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.TextActivity>):
              $SelectionSet
          
}

/**
* Forum Thread
*
* Build type-safe selection set for Thread.
*/
export interface Thread {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Thread>):
              $SelectionSet
          
}

/**
* A forum thread category
*
* Build type-safe selection set for ThreadCategory.
*/
export interface ThreadCategory {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadCategory>):
              $SelectionSet
          
}

/**
* Forum Thread Comment
*
* Build type-safe selection set for ThreadComment.
*/
export interface ThreadComment {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadComment>):
              $SelectionSet
          
}

/**
* Notification for when a thread comment is liked
*
* Build type-safe selection set for ThreadCommentLikeNotification.
*/
export interface ThreadCommentLikeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadCommentLikeNotification>):
              $SelectionSet
          
}

/**
* Notification for when authenticated user is @ mentioned in a forum thread comment
*
* Build type-safe selection set for ThreadCommentMentionNotification.
*/
export interface ThreadCommentMentionNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadCommentMentionNotification>):
              $SelectionSet
          
}

/**
* Notification for when a user replies to your forum thread comment
*
* Build type-safe selection set for ThreadCommentReplyNotification.
*/
export interface ThreadCommentReplyNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadCommentReplyNotification>):
              $SelectionSet
          
}

/**
* Notification for when a user replies to a subscribed forum thread
*
* Build type-safe selection set for ThreadCommentSubscribedNotification.
*/
export interface ThreadCommentSubscribedNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadCommentSubscribedNotification>):
              $SelectionSet
          
}

/**
* Notification for when a thread is liked
*
* Build type-safe selection set for ThreadLikeNotification.
*/
export interface ThreadLikeNotification {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ThreadLikeNotification>):
              $SelectionSet
          
}

/**
* A user
*
* Build type-safe selection set for User.
*/
export interface User {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.User>):
              $SelectionSet
          
}

/**
* A user's activity history stats.
*
* Build type-safe selection set for UserActivityHistory.
*/
export interface UserActivityHistory {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserActivityHistory>):
              $SelectionSet
          
}

/**
* A user's avatars
*
* Build type-safe selection set for UserAvatar.
*/
export interface UserAvatar {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserAvatar>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserCountryStatistic.
*/
export interface UserCountryStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserCountryStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserFormatStatistic.
*/
export interface UserFormatStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserFormatStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserGenreStatistic.
*/
export interface UserGenreStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserGenreStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserLengthStatistic.
*/
export interface UserLengthStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserLengthStatistic>):
              $SelectionSet
          
}

/**
* User data for moderators
*
* Build type-safe selection set for UserModData.
*/
export interface UserModData {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserModData>):
              $SelectionSet
          
}

/**
* A user's general options
*
* Build type-safe selection set for UserOptions.
*/
export interface UserOptions {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserOptions>):
              $SelectionSet
          
}

/**
* A user's previous name
*
* Build type-safe selection set for UserPreviousName.
*/
export interface UserPreviousName {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserPreviousName>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserReleaseYearStatistic.
*/
export interface UserReleaseYearStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserReleaseYearStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserScoreStatistic.
*/
export interface UserScoreStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserScoreStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStaffStatistic.
*/
export interface UserStaffStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStaffStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStartYearStatistic.
*/
export interface UserStartYearStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStartYearStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStatistics.
*/
export interface UserStatistics {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStatistics>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStatisticTypes.
*/
export interface UserStatisticTypes {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStatisticTypes>):
              $SelectionSet
          
}

/**
* A user's statistics
*
* Build type-safe selection set for UserStats.
*/
export interface UserStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStats>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStatusStatistic.
*/
export interface UserStatusStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStatusStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserStudioStatistic.
*/
export interface UserStudioStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserStudioStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserTagStatistic.
*/
export interface UserTagStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserTagStatistic>):
              $SelectionSet
          
}

/**
* Build type-safe selection set for UserVoiceActorStatistic.
*/
export interface UserVoiceActorStatistic {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.UserVoiceActorStatistic>):
              $SelectionSet
          
}

/**
* User's year statistics
*
* Build type-safe selection set for YearStats.
*/
export interface YearStats {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.YearStats>):
              $SelectionSet
          
}


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                               Union
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


/**
* Activity union type
*
* Build type-safe selection set for ActivityUnion.
*/
export interface ActivityUnion {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.ActivityUnion>):
              $SelectionSet
          
}

/**
* Likeable union type
*
* Build type-safe selection set for LikeableUnion.
*/
export interface LikeableUnion {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.LikeableUnion>):
              $SelectionSet
          
}

/**
* Notification union type
*
* Build type-safe selection set for NotificationUnion.
*/
export interface NotificationUnion {

            <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.NotificationUnion>):
              $SelectionSet
          
}


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                             Interface
    // ==================================================================================================
    //
    //
    //
    //
    //
    //

