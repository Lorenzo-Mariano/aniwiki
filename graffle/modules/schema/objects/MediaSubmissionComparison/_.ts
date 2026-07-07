import type * as $Fields from './fields.js'

export * as MediaSubmissionComparison from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media submission with comparison to current data
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface MediaSubmissionComparison {
kind: "Object",
name: "MediaSubmissionComparison",
fields: {
__typename: $Fields.__typename,
submission: $Fields.submission,
character: $Fields.character,
staff: $Fields.staff,
studio: $Fields.studio,
externalLink: $Fields.externalLink
}
}