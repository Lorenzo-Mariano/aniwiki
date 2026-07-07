import type * as $Fields from './fields.js'

export * as MediaCoverImage from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface MediaCoverImage {
kind: "Object",
name: "MediaCoverImage",
fields: {
__typename: $Fields.__typename,
extraLarge: $Fields.extraLarge,
large: $Fields.large,
medium: $Fields.medium,
color: $Fields.color
}
}