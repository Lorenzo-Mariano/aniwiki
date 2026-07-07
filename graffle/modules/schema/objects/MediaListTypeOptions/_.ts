import type * as $Fields from './fields.js'

export * as MediaListTypeOptions from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's list options for anime or manga lists
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface MediaListTypeOptions {
kind: "Object",
name: "MediaListTypeOptions",
fields: {
__typename: $Fields.__typename,
sectionOrder: $Fields.sectionOrder,
splitCompletedSectionByFormat: $Fields.splitCompletedSectionByFormat,
theme: $Fields.theme,
customLists: $Fields.customLists,
advancedScoring: $Fields.advancedScoring,
advancedScoringEnabled: $Fields.advancedScoringEnabled
}
}