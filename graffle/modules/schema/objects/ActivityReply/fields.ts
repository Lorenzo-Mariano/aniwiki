import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"ActivityReply"`
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
value: "ActivityReply"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The id of the reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The id of the replies creator
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.userId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The id of the parent activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.activityId` |
* | **Nullability** | Optional |
*/
export interface activityId {
kind: "OutputField",
name: "activityId",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The reply text
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.text` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface text {
kind: "OutputField",
name: "text",
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The amount of likes the reply has
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.likeCount` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* If the currently authenticated user liked the reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.isLiked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The time the reply was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The user who created reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.user` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityReply}.
*
* The users who liked the reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ActivityReply} |
* | **Path** | `ActivityReply.likes` |
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
