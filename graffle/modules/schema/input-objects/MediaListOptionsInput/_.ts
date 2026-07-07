import type * as $Fields from './fields.js'

export * as MediaListOptionsInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* A user's list options for anime or manga lists
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 6 |
* | **All Fields Nullable** | Yes |
*/
export interface MediaListOptionsInput {
kind: "InputObject",
name: "MediaListOptionsInput",
isAllFieldsNullable: true,
fields: {
sectionOrder: $Fields.sectionOrder,
splitCompletedSectionByFormat: $Fields.splitCompletedSectionByFormat,
customLists: $Fields.customLists,
advancedScoring: $Fields.advancedScoring,
advancedScoringEnabled: $Fields.advancedScoringEnabled,
theme: $Fields.theme
},
type: {
sectionOrder?: $Fields.sectionOrder['type'],
splitCompletedSectionByFormat?: $Fields.splitCompletedSectionByFormat['type'],
customLists?: $Fields.customLists['type'],
advancedScoring?: $Fields.advancedScoring['type'],
advancedScoringEnabled?: $Fields.advancedScoringEnabled['type'],
theme?: $Fields.theme['type']
}
}