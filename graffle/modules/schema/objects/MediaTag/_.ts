import type * as $Fields from './fields.js'

export * as MediaTag from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A tag that describes a theme or element of the media
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 9 |
*/
export interface MediaTag {
kind: "Object",
name: "MediaTag",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name,
description: $Fields.description,
category: $Fields.category,
rank: $Fields.rank,
isGeneralSpoiler: $Fields.isGeneralSpoiler,
isMediaSpoiler: $Fields.isMediaSpoiler,
isAdult: $Fields.isAdult,
userId: $Fields.userId
}
}