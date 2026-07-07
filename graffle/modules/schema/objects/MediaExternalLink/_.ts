import type * as $Fields from './fields.js'

export * as MediaExternalLink from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* An external link to another site related to the media or staff member
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface MediaExternalLink {
kind: "Object",
name: "MediaExternalLink",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
url: $Fields.url,
site: $Fields.site,
siteId: $Fields.siteId,
type: $Fields.type,
language: $Fields.language,
color: $Fields.color,
icon: $Fields.icon,
notes: $Fields.notes,
isDisabled: $Fields.isDisabled
}
}