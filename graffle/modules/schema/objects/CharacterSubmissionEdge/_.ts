import type * as $Fields from './fields.js'

export * as CharacterSubmissionEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* CharacterSubmission connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface CharacterSubmissionEdge {
kind: "Object",
name: "CharacterSubmissionEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
role: $Fields.role,
voiceActors: $Fields.voiceActors,
submittedVoiceActors: $Fields.submittedVoiceActors
}
}