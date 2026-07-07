import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Thread"`
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
value: "Thread"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The id of the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The title of the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.title` |
* | **Nullability** | Optional |
*/
export interface title {
kind: "OutputField",
name: "title",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The text body of the thread (Markdown)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.body` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface body {
kind: "OutputField",
name: "body",
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The id of the thread owner user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.userId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The id of the user who most recently commented on the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.replyUserId` |
* | **Nullability** | Optional |
*/
export interface replyUserId {
kind: "OutputField",
name: "replyUserId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The id of the most recent comment on the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.replyCommentId` |
* | **Nullability** | Optional |
*/
export interface replyCommentId {
kind: "OutputField",
name: "replyCommentId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The number of comments on the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.replyCount` |
* | **Nullability** | Optional |
*/
export interface replyCount {
kind: "OutputField",
name: "replyCount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The number of times users have viewed the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.viewCount` |
* | **Nullability** | Optional |
*/
export interface viewCount {
kind: "OutputField",
name: "viewCount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* If the thread is locked and can receive comments
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.isLocked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* If the thread is stickied and should be displayed at the top of the page
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.isSticky` |
* | **Nullability** | Optional |
*/
export interface isSticky {
kind: "OutputField",
name: "isSticky",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* If the currently authenticated user is subscribed to the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.isSubscribed` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The amount of likes the thread has
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.likeCount` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* If the currently authenticated user liked the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.isLiked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The time of the last reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.repliedAt` |
* | **Nullability** | Optional |
*/
export interface repliedAt {
kind: "OutputField",
name: "repliedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The time of the thread creation
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The time of the thread last update
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.updatedAt` |
* | **Nullability** | Required |
*/
export interface updatedAt {
kind: "OutputField",
name: "updatedAt",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The owner of the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.user` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The user to last reply to the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.replyUser` |
* | **Nullability** | Optional |
*/
export interface replyUser {
kind: "OutputField",
name: "replyUser",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The users who liked the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.likes` |
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

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The url for the thread page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.siteUrl` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The categories of the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadCategory}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.categories` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface categories {
kind: "OutputField",
name: "categories",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ThreadCategory
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Thread}.
*
* The media categories of the thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Thread} |
* | **Path** | `Thread.mediaCategories` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface mediaCategories {
kind: "OutputField",
name: "mediaCategories",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Media
}
