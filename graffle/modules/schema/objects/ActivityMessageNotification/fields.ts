import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"ActivityMessageNotification"`
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
value: "ActivityMessageNotification"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The id of the Notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The if of the user who send the message
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.userId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The type of notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.NotificationType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.type` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The id of the activity message
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.activityId` |
* | **Nullability** | Required |
*/
export interface activityId {
kind: "OutputField",
name: "activityId",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The notification context text
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.context` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The time the notification was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The message activity
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MessageActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.message` |
* | **Nullability** | Optional |
*/
export interface message {
kind: "OutputField",
name: "message",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MessageActivity
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ActivityMessageNotification}.
*
* The user who sent the message
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.ActivityMessageNotification} |
* | **Path** | `ActivityMessageNotification.user` |
* | **Nullability** | Optional |
*/
export interface user {
kind: "OutputField",
name: "user",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}
