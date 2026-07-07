import type * as $Members from './members.js'

export * as NotificationType from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Notification type enum
*
* **Members:**
* - `ACTIVITY_MESSAGE` - A user has sent you message
* - `ACTIVITY_REPLY` - A user has replied to your activity
* - `FOLLOWING` - A user has followed you
* - `ACTIVITY_MENTION` - A user has mentioned you in their activity
* - `THREAD_COMMENT_MENTION` - A user has mentioned you in a forum comment
* - `THREAD_SUBSCRIBED` - A user has commented in one of your subscribed forum threads
* - `THREAD_COMMENT_REPLY` - A user has replied to your forum comment
* - `AIRING` - An anime you are currently watching has aired
* - `ACTIVITY_LIKE` - A user has liked your activity
* - `ACTIVITY_REPLY_LIKE` - A user has liked your activity reply
* - `THREAD_LIKE` - A user has liked your forum thread
* - `THREAD_COMMENT_LIKE` - A user has liked your forum comment
* - `ACTIVITY_REPLY_SUBSCRIBED` - A user has replied to activity you have also replied to
* - `RELATED_MEDIA_ADDITION` - A new anime or manga has been added to the site where its related media is on the user's list
* - `MEDIA_DATA_CHANGE` - An anime or manga has had a data change that affects how a user may track it in their lists
* - `MEDIA_MERGE` - Anime or manga entries on the user's list have been merged into a single entry
* - `MEDIA_DELETION` - An anime or manga on the user's list has been deleted from the site
* - `MEDIA_SUBMISSION_UPDATE` - A user's submission has been accepted, partially accepted, or rejected
* - `STAFF_SUBMISSION_UPDATE` - A user's staff submission has been accepted, partially accepted, or rejected
* - `CHARACTER_SUBMISSION_UPDATE` - A user's character submission has been accepted, partially accepted, or rejected
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 20 |
*/
export interface NotificationType {
kind: "Enum",
name: "NotificationType",
members: $Members.ACTIVITY_MESSAGE
| $Members.ACTIVITY_REPLY
| $Members.FOLLOWING
| $Members.ACTIVITY_MENTION
| $Members.THREAD_COMMENT_MENTION
| $Members.THREAD_SUBSCRIBED
| $Members.THREAD_COMMENT_REPLY
| $Members.AIRING
| $Members.ACTIVITY_LIKE
| $Members.ACTIVITY_REPLY_LIKE
| $Members.THREAD_LIKE
| $Members.THREAD_COMMENT_LIKE
| $Members.ACTIVITY_REPLY_SUBSCRIBED
| $Members.RELATED_MEDIA_ADDITION
| $Members.MEDIA_DATA_CHANGE
| $Members.MEDIA_MERGE
| $Members.MEDIA_DELETION
| $Members.MEDIA_SUBMISSION_UPDATE
| $Members.STAFF_SUBMISSION_UPDATE
| $Members.CHARACTER_SUBMISSION_UPDATE
}