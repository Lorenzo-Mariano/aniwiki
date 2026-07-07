import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MessageActivity"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "MessageActivity"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.id` |
* | **Nullability** | Required |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The user id of the activity's recipient
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.recipientId` |
* | **Nullability** | Optional |
*/
export interface recipientId {
kind: "OutputField",
name: "recipientId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The user id of the activity's sender
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.messengerId` |
* | **Nullability** | Optional |
*/
export interface messengerId {
kind: "OutputField",
name: "messengerId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The type of the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.type` |
* | **Nullability** | Optional |
*/
export interface type {
kind: "OutputField",
name: "type",
arguments: {},
inlineType: [0, ],
namedType: $Schema.ActivityType
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The number of activity replies
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.replyCount` |
* | **Nullability** | Required |
*/
export interface replyCount {
kind: "OutputField",
name: "replyCount",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The message text (Markdown)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.message` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface message {
kind: "OutputField",
name: "message",
arguments: {
/**
* Return the string in pre-parsed html instead of markdown
*/
asHtml: {
kind: "InputField",
name: "asHtml",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* If the activity is locked and can receive replies
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.isLocked` |
* | **Nullability** | Optional |
*/
export interface isLocked {
kind: "OutputField",
name: "isLocked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* If the currently authenticated user is subscribed to the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.isSubscribed` |
* | **Nullability** | Optional |
*/
export interface isSubscribed {
kind: "OutputField",
name: "isSubscribed",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The amount of likes the activity has
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.likeCount` |
* | **Nullability** | Required |
*/
export interface likeCount {
kind: "OutputField",
name: "likeCount",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* If the currently authenticated user liked the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.isLiked` |
* | **Nullability** | Optional |
*/
export interface isLiked {
kind: "OutputField",
name: "isLiked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* If the activity is pinned to the top of the users activity feed
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.isPinned` |
* | **Nullability** | Optional |
*/
export interface isPinned {
kind: "OutputField",
name: "isPinned",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* If the message is private and only viewable to the sender and recipients
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.isPrivate` |
* | **Nullability** | Optional |
*/
export interface isPrivate {
kind: "OutputField",
name: "isPrivate",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The url for the activity page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.siteUrl` |
* | **Nullability** | Optional |
*/
export interface siteUrl {
kind: "OutputField",
name: "siteUrl",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The time the activity was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.createdAt` |
* | **Nullability** | Required |
*/
export interface createdAt {
kind: "OutputField",
name: "createdAt",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The user who the activity message was sent to
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.recipient` |
* | **Nullability** | Optional |
*/
export interface recipient {
kind: "OutputField",
name: "recipient",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The user who sent the activity message
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.messenger` |
* | **Nullability** | Optional |
*/
export interface messenger {
kind: "OutputField",
name: "messenger",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The written replies to the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReply}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.replies` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface replies {
kind: "OutputField",
name: "replies",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ActivityReply
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MessageActivity}.
*
* The users who liked the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MessageActivity} |
* | **Path** | `MessageActivity.likes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface likes {
kind: "OutputField",
name: "likes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.User
}
