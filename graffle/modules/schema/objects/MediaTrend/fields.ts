import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaTrend"`
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
value: "MediaTrend"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The id of the tag
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.mediaId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The day the data was recorded (timestamp)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.date` |
* | **Nullability** | Required |
*/
export interface date {
kind: "OutputField",
name: "date",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The amount of media activity on the day
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.trending` |
* | **Nullability** | Required |
*/
export interface trending {
kind: "OutputField",
name: "trending",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* A weighted average score of all the user's scores of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.averageScore` |
* | **Nullability** | Optional |
*/
export interface averageScore {
kind: "OutputField",
name: "averageScore",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The number of users with the media on their list
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.popularity` |
* | **Nullability** | Optional |
*/
export interface popularity {
kind: "OutputField",
name: "popularity",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The number of users with watching/reading the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.inProgress` |
* | **Nullability** | Optional |
*/
export interface inProgress {
kind: "OutputField",
name: "inProgress",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* If the media was being released at this time
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.releasing` |
* | **Nullability** | Required |
*/
export interface releasing {
kind: "OutputField",
name: "releasing",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The episode number of the anime released on this day
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.episode` |
* | **Nullability** | Optional |
*/
export interface episode {
kind: "OutputField",
name: "episode",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaTrend}.
*
* The related media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaTrend} |
* | **Path** | `MediaTrend.media` |
* | **Nullability** | Optional |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}
