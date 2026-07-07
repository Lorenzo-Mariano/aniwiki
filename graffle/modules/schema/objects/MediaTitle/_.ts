import type * as $Fields from './fields.js'

export * as MediaTitle from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* The official titles of the media in various languages
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface MediaTitle {
kind: "Object",
name: "MediaTitle",
fields: {
__typename: $Fields.__typename,
romaji: $Fields.romaji,
english: $Fields.english,
native: $Fields.native,
userPreferred: $Fields.userPreferred
}
}