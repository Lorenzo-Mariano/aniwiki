import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"ThreadLikeNotification"`
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
value: "ThreadLikeNotification"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The id of the Notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The id of the user who liked to the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.userId` |
* | **Nullability** | Required |
*/
export interface userId {
kind: "OutputField",
name: "userId",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The type of notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.NotificationType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.type` |
* | **Nullability** | Optional |
*/
export interface type {
kind: "OutputField",
name: "type",
arguments: {},
inlineType: [0, ],
namedType: $Schema.NotificationType
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The id of the thread which was liked
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.threadId` |
* | **Nullability** | Required |
*/
export interface threadId {
kind: "OutputField",
name: "threadId",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The notification context text
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.context` |
* | **Nullability** | Optional |
*/
export interface context {
kind: "OutputField",
name: "context",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The time the notification was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.createdAt` |
* | **Nullability** | Optional |
*/
export interface createdAt {
kind: "OutputField",
name: "createdAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The thread that the relevant comment belongs to
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.thread` |
* | **Nullability** | Optional |
*/
export interface thread {
kind: "OutputField",
name: "thread",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Thread
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The liked thread comment
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadComment} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.comment` |
* | **Nullability** | Optional |
*/
export interface comment {
kind: "OutputField",
name: "comment",
arguments: {},
inlineType: [0, ],
namedType: $Schema.ThreadComment
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ThreadLikeNotification}.
*
* The user who liked the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ThreadLikeNotification} |
* | **Path** | `ThreadLikeNotification.user` |
* | **Nullability** | Optional |
*/
export interface user {
kind: "OutputField",
name: "user",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}
