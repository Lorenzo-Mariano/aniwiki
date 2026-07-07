import type * as $Fields from './fields.js'

export * as CharacterName from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* The names of the character
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface CharacterName {
kind: "Object",
name: "CharacterName",
fields: {
__typename: $Fields.__typename,
first: $Fields.first,
middle: $Fields.middle,
last: $Fields.last,
full: $Fields.full,
native: $Fields.native,
alternative: $Fields.alternative,
alternativeSpoiler: $Fields.alternativeSpoiler,
userPreferred: $Fields.userPreferred
}
}