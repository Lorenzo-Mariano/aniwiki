import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaMergeNotification"`
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
value: "MediaMergeNotification"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The id of the Notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The type of notification
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.NotificationType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.type` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The id of the media that was merged into
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.mediaId` |
* | **Nullability** | Required |
*/
export interface mediaId {
kind: "OutputField",
name: "mediaId",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The title of the deleted media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.deletedMediaTitles` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface deletedMediaTitles {
kind: "OutputField",
name: "deletedMediaTitles",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The reason for the media data change
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.context` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The reason for the media merge
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.reason` |
* | **Nullability** | Optional |
*/
export interface reason {
kind: "OutputField",
name: "reason",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The time the notification was created at
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaMergeNotification}.
*
* The media that was merged into
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaMergeNotification} |
* | **Path** | `MediaMergeNotification.media` |
* | **Nullability** | Optional |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}
