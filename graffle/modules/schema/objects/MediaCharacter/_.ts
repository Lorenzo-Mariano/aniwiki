import type * as $Fields from './fields.js'

export * as MediaCharacter from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Internal - Media characters separated
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface MediaCharacter {
kind: "Object",
name: "MediaCharacter",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
role: $Fields.role,
roleNotes: $Fields.roleNotes,
dubGroup: $Fields.dubGroup,
characterName: $Fields.characterName,
character: $Fields.character,
voiceActor: $Fields.voiceActor
}
}