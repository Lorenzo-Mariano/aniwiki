import type * as $Fields from './fields.js'

export * as MediaSubmission from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media submission
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 17 |
*/
export interface MediaSubmission {
kind: "Object",
name: "MediaSubmission",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
submitter: $Fields.submitter,
assignee: $Fields.assignee,
status: $Fields.status,
submitterStats: $Fields.submitterStats,
notes: $Fields.notes,
source: $Fields.source,
changes: $Fields.changes,
locked: $Fields.locked,
media: $Fields.media,
submission: $Fields.submission,
characters: $Fields.characters,
staff: $Fields.staff,
studios: $Fields.studios,
relations: $Fields.relations,
externalLinks: $Fields.externalLinks,
createdAt: $Fields.createdAt
}
}