import type * as $Fields from './fields.js'

export * as RevisionHistory from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Feed of mod edit activity
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface RevisionHistory {
kind: "Object",
name: "RevisionHistory",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
action: $Fields.action,
changes: $Fields.changes,
user: $Fields.user,
media: $Fields.media,
character: $Fields.character,
staff: $Fields.staff,
studio: $Fields.studio,
externalLink: $Fields.externalLink,
createdAt: $Fields.createdAt
}
}