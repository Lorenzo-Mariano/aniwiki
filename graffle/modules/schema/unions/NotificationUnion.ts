import type { AiringNotification } from '../objects/AiringNotification/_.js'
import type { FollowingNotification } from '../objects/FollowingNotification/_.js'
import type { ActivityMessageNotification } from '../objects/ActivityMessageNotification/_.js'
import type { ActivityMentionNotification } from '../objects/ActivityMentionNotification/_.js'
import type { ActivityReplyNotification } from '../objects/ActivityReplyNotification/_.js'
import type { ActivityReplySubscribedNotification } from '../objects/ActivityReplySubscribedNotification/_.js'
import type { ActivityLikeNotification } from '../objects/ActivityLikeNotification/_.js'
import type { ActivityReplyLikeNotification } from '../objects/ActivityReplyLikeNotification/_.js'
import type { ThreadCommentMentionNotification } from '../objects/ThreadCommentMentionNotification/_.js'
import type { ThreadCommentReplyNotification } from '../objects/ThreadCommentReplyNotification/_.js'
import type { ThreadCommentSubscribedNotification } from '../objects/ThreadCommentSubscribedNotification/_.js'
import type { ThreadCommentLikeNotification } from '../objects/ThreadCommentLikeNotification/_.js'
import type { ThreadLikeNotification } from '../objects/ThreadLikeNotification/_.js'
import type { RelatedMediaAdditionNotification } from '../objects/RelatedMediaAdditionNotification/_.js'
import type { MediaDataChangeNotification } from '../objects/MediaDataChangeNotification/_.js'
import type { MediaMergeNotification } from '../objects/MediaMergeNotification/_.js'
import type { MediaDeletionNotification } from '../objects/MediaDeletionNotification/_.js'
import type { MediaSubmissionUpdateNotification } from '../objects/MediaSubmissionUpdateNotification/_.js'
import type { StaffSubmissionUpdateNotification } from '../objects/StaffSubmissionUpdateNotification/_.js'
import type { CharacterSubmissionUpdateNotification } from '../objects/CharacterSubmissionUpdateNotification/_.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
*
* Notification union type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Members** | 20 |
* | **Types** | {@link $Schema.AiringNotification}, {@link $Schema.FollowingNotification}, {@link $Schema.ActivityMessageNotification}, {@link $Schema.ActivityMentionNotification}, {@link $Schema.ActivityReplyNotification}, {@link $Schema.ActivityReplySubscribedNotification}, {@link $Schema.ActivityLikeNotification}, {@link $Schema.ActivityReplyLikeNotification}, {@link $Schema.ThreadCommentMentionNotification}, {@link $Schema.ThreadCommentReplyNotification}, {@link $Schema.ThreadCommentSubscribedNotification}, {@link $Schema.ThreadCommentLikeNotification}, {@link $Schema.ThreadLikeNotification}, {@link $Schema.RelatedMediaAdditionNotification}, {@link $Schema.MediaDataChangeNotification}, {@link $Schema.MediaMergeNotification}, {@link $Schema.MediaDeletionNotification}, {@link $Schema.MediaSubmissionUpdateNotification}, {@link $Schema.StaffSubmissionUpdateNotification}, {@link $Schema.CharacterSubmissionUpdateNotification} |
*/
export interface NotificationUnion {
kind: "Union",
name: "NotificationUnion",
members: [AiringNotification, FollowingNotification, ActivityMessageNotification, ActivityMentionNotification, ActivityReplyNotification, ActivityReplySubscribedNotification, ActivityLikeNotification, ActivityReplyLikeNotification, ThreadCommentMentionNotification, ThreadCommentReplyNotification, ThreadCommentSubscribedNotification, ThreadCommentLikeNotification, ThreadLikeNotification, RelatedMediaAdditionNotification, MediaDataChangeNotification, MediaMergeNotification, MediaDeletionNotification, MediaSubmissionUpdateNotification, StaffSubmissionUpdateNotification, CharacterSubmissionUpdateNotification],
membersUnion: AiringNotification
| FollowingNotification
| ActivityMessageNotification
| ActivityMentionNotification
| ActivityReplyNotification
| ActivityReplySubscribedNotification
| ActivityLikeNotification
| ActivityReplyLikeNotification
| ThreadCommentMentionNotification
| ThreadCommentReplyNotification
| ThreadCommentSubscribedNotification
| ThreadCommentLikeNotification
| ThreadLikeNotification
| RelatedMediaAdditionNotification
| MediaDataChangeNotification
| MediaMergeNotification
| MediaDeletionNotification
| MediaSubmissionUpdateNotification
| StaffSubmissionUpdateNotification
| CharacterSubmissionUpdateNotification,
membersIndex: {
AiringNotification: AiringNotification,
FollowingNotification: FollowingNotification,
ActivityMessageNotification: ActivityMessageNotification,
ActivityMentionNotification: ActivityMentionNotification,
ActivityReplyNotification: ActivityReplyNotification,
ActivityReplySubscribedNotification: ActivityReplySubscribedNotification,
ActivityLikeNotification: ActivityLikeNotification,
ActivityReplyLikeNotification: ActivityReplyLikeNotification,
ThreadCommentMentionNotification: ThreadCommentMentionNotification,
ThreadCommentReplyNotification: ThreadCommentReplyNotification,
ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification,
ThreadCommentLikeNotification: ThreadCommentLikeNotification,
ThreadLikeNotification: ThreadLikeNotification,
RelatedMediaAdditionNotification: RelatedMediaAdditionNotification,
MediaDataChangeNotification: MediaDataChangeNotification,
MediaMergeNotification: MediaMergeNotification,
MediaDeletionNotification: MediaDeletionNotification,
MediaSubmissionUpdateNotification: MediaSubmissionUpdateNotification,
StaffSubmissionUpdateNotification: StaffSubmissionUpdateNotification,
CharacterSubmissionUpdateNotification: CharacterSubmissionUpdateNotification
}
}