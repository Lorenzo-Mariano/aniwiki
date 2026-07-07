import type * as $Fields from './fields.js'

export * as Character from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A character that features in an anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 15 |
*/
export interface Character {
kind: "Object",
name: "Character",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name,
image: $Fields.image,
description: $Fields.description,
gender: $Fields.gender,
dateOfBirth: $Fields.dateOfBirth,
age: $Fields.age,
bloodType: $Fields.bloodType,
isFavourite: $Fields.isFavourite,
isFavouriteBlocked: $Fields.isFavouriteBlocked,
siteUrl: $Fields.siteUrl,
media: $Fields.media,
updatedAt: $Fields.updatedAt,
favourites: $Fields.favourites,
modNotes: $Fields.modNotes
}
}