/**
* A user has sent you message
*/
export type ACTIVITY_MESSAGE = "ACTIVITY_MESSAGE"
/**
* A user has replied to your activity
*/
export type ACTIVITY_REPLY = "ACTIVITY_REPLY"
/**
* A user has followed you
*/
export type FOLLOWING = "FOLLOWING"
/**
* A user has mentioned you in their activity
*/
export type ACTIVITY_MENTION = "ACTIVITY_MENTION"
/**
* A user has mentioned you in a forum comment
*/
export type THREAD_COMMENT_MENTION = "THREAD_COMMENT_MENTION"
/**
* A user has commented in one of your subscribed forum threads
*/
export type THREAD_SUBSCRIBED = "THREAD_SUBSCRIBED"
/**
* A user has replied to your forum comment
*/
export type THREAD_COMMENT_REPLY = "THREAD_COMMENT_REPLY"
/**
* An anime you are currently watching has aired
*/
export type AIRING = "AIRING"
/**
* A user has liked your activity
*/
export type ACTIVITY_LIKE = "ACTIVITY_LIKE"
/**
* A user has liked your activity reply
*/
export type ACTIVITY_REPLY_LIKE = "ACTIVITY_REPLY_LIKE"
/**
* A user has liked your forum thread
*/
export type THREAD_LIKE = "THREAD_LIKE"
/**
* A user has liked your forum comment
*/
export type THREAD_COMMENT_LIKE = "THREAD_COMMENT_LIKE"
/**
* A user has replied to activity you have also replied to
*/
export type ACTIVITY_REPLY_SUBSCRIBED = "ACTIVITY_REPLY_SUBSCRIBED"
/**
* A new anime or manga has been added to the site where its related media is on the user's list
*/
export type RELATED_MEDIA_ADDITION = "RELATED_MEDIA_ADDITION"
/**
* An anime or manga has had a data change that affects how a user may track it in their lists
*/
export type MEDIA_DATA_CHANGE = "MEDIA_DATA_CHANGE"
/**
* Anime or manga entries on the user's list have been merged into a single entry
*/
export type MEDIA_MERGE = "MEDIA_MERGE"
/**
* An anime or manga on the user's list has been deleted from the site
*/
export type MEDIA_DELETION = "MEDIA_DELETION"
/**
* A user's submission has been accepted, partially accepted, or rejected
*/
export type MEDIA_SUBMISSION_UPDATE = "MEDIA_SUBMISSION_UPDATE"
/**
* A user's staff submission has been accepted, partially accepted, or rejected
*/
export type STAFF_SUBMISSION_UPDATE = "STAFF_SUBMISSION_UPDATE"
/**
* A user's character submission has been accepted, partially accepted, or rejected
*/
export type CHARACTER_SUBMISSION_UPDATE = "CHARACTER_SUBMISSION_UPDATE"