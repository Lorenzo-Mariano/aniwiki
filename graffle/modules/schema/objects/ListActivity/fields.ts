import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"ListActivity"`
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
value: "ListActivity"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The user id of the activity's creator
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.userId` |
* | **Nullability** | Optional |
*/
export interface userId {
kind: "OutputField",
name: "userId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The type of activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.type` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The number of activity replies
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.replyCount` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The list item's textual status
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.status` |
* | **Nullability** | Optional |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The list progress made
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.progress` |
* | **Nullability** | Optional |
*/
export interface progress {
kind: "OutputField",
name: "progress",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* If the activity is locked and can receive replies
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.isLocked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* If the currently authenticated user is subscribed to the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.isSubscribed` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The amount of likes the activity has
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.likeCount` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* If the currently authenticated user liked the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.isLiked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* If the activity is pinned to the top of the users activity feed
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.isPinned` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The url for the activity page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.siteUrl` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The time the activity was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The owner of the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.user` |
* | **Nullability** | Optional |
*/
export interface user {
kind: "OutputField",
name: "user",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The associated media to the activity update
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.media` |
* | **Nullability** | Optional |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The written replies to the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReply}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.replies` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ListActivity}.
*
* The users who liked the activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ListActivity} |
* | **Path** | `ListActivity.likes` |
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
