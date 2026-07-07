import type * as $Fields from './fields.js'

export * as MediaSubmissionEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 16 |
*/
export interface MediaSubmissionEdge {
kind: "Object",
name: "MediaSubmissionEdge",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
characterRole: $Fields.characterRole,
staffRole: $Fields.staffRole,
roleNotes: $Fields.roleNotes,
dubGroup: $Fields.dubGroup,
characterName: $Fields.characterName,
isMain: $Fields.isMain,
character: $Fields.character,
characterSubmission: $Fields.characterSubmission,
voiceActor: $Fields.voiceActor,
voiceActorSubmission: $Fields.voiceActorSubmission,
staff: $Fields.staff,
staffSubmission: $Fields.staffSubmission,
studio: $Fields.studio,
externalLink: $Fields.externalLink,
media: $Fields.media
}
}