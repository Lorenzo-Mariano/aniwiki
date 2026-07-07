import type * as $Fields from './fields.js'

export * as CharacterImage from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface CharacterImage {
kind: "Object",
name: "CharacterImage",
fields: {
__typename: $Fields.__typename,
large: $Fields.large,
medium: $Fields.medium
}
}