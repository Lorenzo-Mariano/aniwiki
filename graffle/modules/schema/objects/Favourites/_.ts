import type * as $Fields from './fields.js'

export * as Favourites from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's favourite anime, manga, characters, staff & studios
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface Favourites {
kind: "Object",
name: "Favourites",
fields: {
__typename: $Fields.__typename,
anime: $Fields.anime,
manga: $Fields.manga,
characters: $Fields.characters,
staff: $Fields.staff,
studios: $Fields.studios
}
}