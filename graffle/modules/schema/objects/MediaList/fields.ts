import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaList"`
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
value: "MediaList"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The id of the list entry
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The id of the user owner of the list entry
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.userId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The id of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.mediaId` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.status` |
* | **Nullability** | Optional |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListStatus
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The score of the entry
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Float} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.score` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface score {
kind: "OutputField",
name: "score",
arguments: {
/**
* Force the score to be returned in the provided format type.
*/
format: {
kind: "InputField",
name: "format",
inlineType: [0, ],
namedType: $Schema.ScoreFormat
}
},
inlineType: [0, ],
namedType: $Schema.Float
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The amount of episodes/chapters consumed by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.progress` |
* | **Nullability** | Optional |
*/
export interface progress {
kind: "OutputField",
name: "progress",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The amount of volumes read by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.progressVolumes` |
* | **Nullability** | Optional |
*/
export interface progressVolumes {
kind: "OutputField",
name: "progressVolumes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* The amount of times the user has rewatched/read the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.repeat` |
* | **Nullability** | Optional |
*/
export interface repeat {
kind: "OutputField",
name: "repeat",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* Priority of planning
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.priority` |
* | **Nullability** | Optional |
*/
export interface priority {
kind: "OutputField",
name: "priority",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* If the entry should only be visible to authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.private` |
* | **Nullability** | Optional |
*/
interface $private {
kind: "OutputField",
name: "private",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}
export { type $private as private }

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* Text notes
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.notes` |
* | **Nullability** | Optional |
*/
export interface notes {
kind: "OutputField",
name: "notes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* If the entry shown be hidden from non-custom lists
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.hiddenFromStatusLists` |
* | **Nullability** | Optional |
*/
export interface hiddenFromStatusLists {
kind: "OutputField",
name: "hiddenFromStatusLists",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* Map of booleans for which custom lists the entry are in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.customLists` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface customLists {
kind: "OutputField",
name: "customLists",
arguments: {
/**
* Change return structure to an array of objects
*/
asArray: {
kind: "InputField",
name: "asArray",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* Map of advanced scores with name keys
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.advancedScores` |
* | **Nullability** | Optional |
*/
export interface advancedScores {
kind: "OutputField",
name: "advancedScores",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* When the entry was started by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.startedAt` |
* | **Nullability** | Optional |
*/
export interface startedAt {
kind: "OutputField",
name: "startedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* When the entry was completed by the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.completedAt` |
* | **Nullability** | Optional |
*/
export interface completedAt {
kind: "OutputField",
name: "completedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* When the entry data was last updated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.updatedAt` |
* | **Nullability** | Optional |
*/
export interface updatedAt {
kind: "OutputField",
name: "updatedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* When the entry data was created
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.createdAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.media` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaList}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaList} |
* | **Path** | `MediaList.user` |
* | **Nullability** | Optional |
*/
export interface user {
kind: "OutputField",
name: "user",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}
