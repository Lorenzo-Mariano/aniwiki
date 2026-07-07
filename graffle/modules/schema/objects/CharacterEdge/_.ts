import type * as $Fields from './fields.js'

export * as CharacterEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Character connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface CharacterEdge {
kind: "Object",
name: "CharacterEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
id: $Fields.id,
role: $Fields.role,
name: $Fields.name,
voiceActors: $Fields.voiceActors,
voiceActorRoles: $Fields.voiceActorRoles,
media: $Fields.media,
favouriteOrder: $Fields.favouriteOrder
}
}