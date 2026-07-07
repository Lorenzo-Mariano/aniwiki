import type * as $Fields from './fields.js'

export * as Studio from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Animation or production company
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface Studio {
kind: "Object",
name: "Studio",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name,
isAnimationStudio: $Fields.isAnimationStudio,
media: $Fields.media,
siteUrl: $Fields.siteUrl,
isFavourite: $Fields.isFavourite,
favourites: $Fields.favourites
}
}