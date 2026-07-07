import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaListOptions"`
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
value: "MediaListOptions"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* The score format the user is using for media lists
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ScoreFormat} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.scoreFormat` |
* | **Nullability** | Optional |
*/
export interface scoreFormat {
kind: "OutputField",
name: "scoreFormat",
arguments: {},
inlineType: [0, ],
namedType: $Schema.ScoreFormat
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* The default order list rows should be displayed in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.rowOrder` |
* | **Nullability** | Optional |
*/
export interface rowOrder {
kind: "OutputField",
name: "rowOrder",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* @deprecated No longer used
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.useLegacyLists` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
export interface useLegacyLists {
kind: "OutputField",
name: "useLegacyLists",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* The user's anime list options
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListTypeOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.animeList` |
* | **Nullability** | Optional |
*/
export interface animeList {
kind: "OutputField",
name: "animeList",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListTypeOptions
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* The user's manga list options
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListTypeOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.mangaList` |
* | **Nullability** | Optional |
*/
export interface mangaList {
kind: "OutputField",
name: "mangaList",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListTypeOptions
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* The list theme options for both lists
*
* @deprecated No longer used
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.sharedTheme` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
export interface sharedTheme {
kind: "OutputField",
name: "sharedTheme",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListOptions}.
*
* If the shared theme should be used instead of the individual list themes
*
* @deprecated No longer used
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptions} |
* | **Path** | `MediaListOptions.sharedThemeEnabled` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
export interface sharedThemeEnabled {
kind: "OutputField",
name: "sharedThemeEnabled",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}
