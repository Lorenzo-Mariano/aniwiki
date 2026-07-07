import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaListGroup"`
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
value: "MediaListGroup"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListGroup}.
*
* Media list entries
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListGroup} |
* | **Path** | `MediaListGroup.entries` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface entries {
kind: "OutputField",
name: "entries",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListGroup}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListGroup} |
* | **Path** | `MediaListGroup.name` |
* | **Nullability** | Optional |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListGroup}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListGroup} |
* | **Path** | `MediaListGroup.isCustomList` |
* | **Nullability** | Optional |
*/
export interface isCustomList {
kind: "OutputField",
name: "isCustomList",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListGroup}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListGroup} |
* | **Path** | `MediaListGroup.isSplitCompletedList` |
* | **Nullability** | Optional |
*/
export interface isSplitCompletedList {
kind: "OutputField",
name: "isSplitCompletedList",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListGroup}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaListGroup} |
* | **Path** | `MediaListGroup.status` |
* | **Nullability** | Optional |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListStatus
}
