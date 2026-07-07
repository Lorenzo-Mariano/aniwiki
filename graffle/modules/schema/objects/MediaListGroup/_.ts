import type * as $Fields from './fields.js'

export * as MediaListGroup from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* List group of anime or manga entries
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface MediaListGroup {
kind: "Object",
name: "MediaListGroup",
fields: {
__typename: $Fields.__typename,
entries: $Fields.entries,
name: $Fields.name,
isCustomList: $Fields.isCustomList,
isSplitCompletedList: $Fields.isSplitCompletedList,
status: $Fields.status
}
}