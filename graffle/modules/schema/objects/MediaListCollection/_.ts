import type * as $Fields from './fields.js'

export * as MediaListCollection from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* List of anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface MediaListCollection {
kind: "Object",
name: "MediaListCollection",
fields: {
__typename: $Fields.__typename,
lists: $Fields.lists,
user: $Fields.user,
hasNextChunk: $Fields.hasNextChunk,
statusLists: $Fields.statusLists,
customLists: $Fields.customLists
}
}