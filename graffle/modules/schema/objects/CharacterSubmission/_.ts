import type * as $Fields from './fields.js'

export * as CharacterSubmission from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A submission for a character that features in an anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface CharacterSubmission {
kind: "Object",
name: "CharacterSubmission",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
character: $Fields.character,
submission: $Fields.submission,
submitter: $Fields.submitter,
assignee: $Fields.assignee,
status: $Fields.status,
notes: $Fields.notes,
source: $Fields.source,
locked: $Fields.locked,
createdAt: $Fields.createdAt
}
}