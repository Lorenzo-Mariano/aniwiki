import type * as $Fields from './fields.js'

export * as MediaTitleInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* The official titles of the media in various languages
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 3 |
* | **All Fields Nullable** | Yes |
*/
export interface MediaTitleInput {
kind: "InputObject",
name: "MediaTitleInput",
isAllFieldsNullable: true,
fields: {
romaji: $Fields.romaji,
english: $Fields.english,
native: $Fields.native
},
type: {
romaji?: $Fields.romaji['type'],
english?: $Fields.english['type'],
native?: $Fields.native['type']
}
}