import type * as $Fields from './fields.js'

export * as AniChartHighlightInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 2 |
* | **All Fields Nullable** | Yes |
*/
export interface AniChartHighlightInput {
kind: "InputObject",
name: "AniChartHighlightInput",
isAllFieldsNullable: true,
fields: {
mediaId: $Fields.mediaId,
highlight: $Fields.highlight
},
type: {
mediaId?: $Fields.mediaId['type'],
highlight?: $Fields.highlight['type']
}
}