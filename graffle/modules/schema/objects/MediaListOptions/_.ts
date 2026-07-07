import type * as $Fields from './fields.js'

export * as MediaListOptions from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's list options
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface MediaListOptions {
kind: "Object",
name: "MediaListOptions",
fields: {
__typename: $Fields.__typename,
scoreFormat: $Fields.scoreFormat,
rowOrder: $Fields.rowOrder,
useLegacyLists: $Fields.useLegacyLists,
animeList: $Fields.animeList,
mangaList: $Fields.mangaList,
sharedTheme: $Fields.sharedTheme,
sharedThemeEnabled: $Fields.sharedThemeEnabled
}
}