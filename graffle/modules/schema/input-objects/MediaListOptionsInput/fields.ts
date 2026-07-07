import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* The order each list should be displayed in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.sectionOrder` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface sectionOrder {
kind: "InputField",
name: "sectionOrder",
inlineType: [0, [0, ]],
namedType: $Schema.String,
type: readonly ($Schema.String['codec']['_typeDecoded'])[] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* If the completed sections of the list should be separated by format
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.splitCompletedSectionByFormat` |
* | **Nullability** | Optional |
*/
export interface splitCompletedSectionByFormat {
kind: "InputField",
name: "splitCompletedSectionByFormat",
inlineType: [0, ],
namedType: $Schema.Boolean,
type: $Schema.Boolean['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* The names of the user's custom lists
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.customLists` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface customLists {
kind: "InputField",
name: "customLists",
inlineType: [0, [0, ]],
namedType: $Schema.String,
type: readonly ($Schema.String['codec']['_typeDecoded'])[] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* The names of the user's advanced scoring sections
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.advancedScoring` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface advancedScoring {
kind: "InputField",
name: "advancedScoring",
inlineType: [0, [0, ]],
namedType: $Schema.String,
type: readonly ($Schema.String['codec']['_typeDecoded'])[] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* If advanced scoring is enabled
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.advancedScoringEnabled` |
* | **Nullability** | Optional |
*/
export interface advancedScoringEnabled {
kind: "InputField",
name: "advancedScoringEnabled",
inlineType: [0, ],
namedType: $Schema.Boolean,
type: $Schema.Boolean['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.MediaListOptionsInput}.
*
* list theme
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaListOptionsInput} |
* | **Path** | `MediaListOptionsInput.theme` |
* | **Nullability** | Optional |
*/
export interface theme {
kind: "InputField",
name: "theme",
inlineType: [0, ],
namedType: $Schema.String,
type: $Schema.String['codec']['_typeDecoded'] | null | undefined
}