import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaListTypeOptions"`
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
value: "MediaListTypeOptions"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* The order each list should be displayed in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.sectionOrder` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface sectionOrder {
kind: "OutputField",
name: "sectionOrder",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* If the completed sections of the list should be separated by format
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.splitCompletedSectionByFormat` |
* | **Nullability** | Optional |
*/
export interface splitCompletedSectionByFormat {
kind: "OutputField",
name: "splitCompletedSectionByFormat",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* The list theme options
*
* @deprecated This field has not yet been fully implemented and may change without warning
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.theme` |
* | **⚠ Deprecated** | This field has not yet been fully implemented and may change without warning |
* | **Nullability** | Optional |
*/
export interface theme {
kind: "OutputField",
name: "theme",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* The names of the user's custom lists
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.customLists` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface customLists {
kind: "OutputField",
name: "customLists",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* The names of the user's advanced scoring sections
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.advancedScoring` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface advancedScoring {
kind: "OutputField",
name: "advancedScoring",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaListTypeOptions}.
*
* If advanced scoring is enabled
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListTypeOptions} |
* | **Path** | `MediaListTypeOptions.advancedScoringEnabled` |
* | **Nullability** | Optional |
*/
export interface advancedScoringEnabled {
kind: "OutputField",
name: "advancedScoringEnabled",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}
