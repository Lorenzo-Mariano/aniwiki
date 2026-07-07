import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaListCollection"`
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
value: "MediaListCollection"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListCollection}.
*
* Grouped media list entries
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListGroup}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListCollection} |
* | **Path** | `MediaListCollection.lists` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface lists {
kind: "OutputField",
name: "lists",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaListGroup
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListCollection}.
*
* The owner of the list
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListCollection} |
* | **Path** | `MediaListCollection.user` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListCollection}.
*
* If there is another chunk
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListCollection} |
* | **Path** | `MediaListCollection.hasNextChunk` |
* | **Nullability** | Optional |
*/
export interface hasNextChunk {
kind: "OutputField",
name: "hasNextChunk",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListCollection}.
*
* A map of media list entry arrays grouped by status
*
* @deprecated Not GraphQL spec compliant, use lists field instead.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListCollection} |
* | **Path** | `MediaListCollection.statusLists` |
* | **⚠ Deprecated** | Not GraphQL spec compliant, use lists field instead. |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*/
export interface statusLists {
kind: "OutputField",
name: "statusLists",
arguments: {
asArray: {
kind: "InputField",
name: "asArray",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, [0, [0, ]]],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListCollection}.
*
* A map of media list entry arrays grouped by custom lists
*
* @deprecated Not GraphQL spec compliant, use lists field instead.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListCollection} |
* | **Path** | `MediaListCollection.customLists` |
* | **⚠ Deprecated** | Not GraphQL spec compliant, use lists field instead. |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*/
export interface customLists {
kind: "OutputField",
name: "customLists",
arguments: {
asArray: {
kind: "InputField",
name: "asArray",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, [0, [0, ]]],
namedType: $Schema.MediaList
}
