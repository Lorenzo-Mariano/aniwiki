import type * as $Fields from './fields.js'

export * as MediaEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 13 |
*/
export interface MediaEdge {
kind: "Object",
name: "MediaEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
id: $Fields.id,
relationType: $Fields.relationType,
isMainStudio: $Fields.isMainStudio,
characters: $Fields.characters,
characterRole: $Fields.characterRole,
characterName: $Fields.characterName,
roleNotes: $Fields.roleNotes,
dubGroup: $Fields.dubGroup,
staffRole: $Fields.staffRole,
voiceActors: $Fields.voiceActors,
voiceActorRoles: $Fields.voiceActorRoles,
favouriteOrder: $Fields.favouriteOrder
}
}