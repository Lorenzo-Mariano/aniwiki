import type { ListActivity } from '../objects/ListActivity/_.js'
import type { TextActivity } from '../objects/TextActivity/_.js'
import type { MessageActivity } from '../objects/MessageActivity/_.js'
import type { ActivityReply } from '../objects/ActivityReply/_.js'
import type { Thread } from '../objects/Thread/_.js'
import type { ThreadComment } from '../objects/ThreadComment/_.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
*
* Likeable union type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Members** | 6 |
* | **Types** | {@link $Schema.ListActivity}, {@link $Schema.TextActivity}, {@link $Schema.MessageActivity}, {@link $Schema.ActivityReply}, {@link $Schema.Thread}, {@link $Schema.ThreadComment} |
*/
export interface LikeableUnion {
kind: "Union",
name: "LikeableUnion",
members: [ListActivity, TextActivity, MessageActivity, ActivityReply, Thread, ThreadComment],
membersUnion: ListActivity
| TextActivity
| MessageActivity
| ActivityReply
| Thread
| ThreadComment,
membersIndex: {
ListActivity: ListActivity,
TextActivity: TextActivity,
MessageActivity: MessageActivity,
ActivityReply: ActivityReply,
Thread: Thread,
ThreadComment: ThreadComment
}
}