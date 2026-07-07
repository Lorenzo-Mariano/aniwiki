import type * as $Fields from './fields.js'

export * as Staff from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Voice actors or production staff
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 27 |
*/
export interface Staff {
kind: "Object",
name: "Staff",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name,
language: $Fields.language,
languageV2: $Fields.languageV2,
image: $Fields.image,
description: $Fields.description,
primaryOccupations: $Fields.primaryOccupations,
gender: $Fields.gender,
dateOfBirth: $Fields.dateOfBirth,
dateOfDeath: $Fields.dateOfDeath,
age: $Fields.age,
yearsActive: $Fields.yearsActive,
homeTown: $Fields.homeTown,
bloodType: $Fields.bloodType,
isFavourite: $Fields.isFavourite,
isFavouriteBlocked: $Fields.isFavouriteBlocked,
siteUrl: $Fields.siteUrl,
staffMedia: $Fields.staffMedia,
characters: $Fields.characters,
characterMedia: $Fields.characterMedia,
updatedAt: $Fields.updatedAt,
staff: $Fields.staff,
submitter: $Fields.submitter,
submissionStatus: $Fields.submissionStatus,
submissionNotes: $Fields.submissionNotes,
favourites: $Fields.favourites,
modNotes: $Fields.modNotes
}
}